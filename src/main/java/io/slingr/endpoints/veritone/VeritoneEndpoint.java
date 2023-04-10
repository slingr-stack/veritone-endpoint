package io.slingr.endpoints.veritone;

import io.slingr.endpoints.HttpEndpoint;
import io.slingr.endpoints.exceptions.EndpointException;
import io.slingr.endpoints.exceptions.ErrorCode;
import io.slingr.endpoints.framework.annotations.EndpointFunction;
import io.slingr.endpoints.framework.annotations.EndpointProperty;
import io.slingr.endpoints.framework.annotations.EndpointWebService;
import io.slingr.endpoints.framework.annotations.SlingrEndpoint;
import io.slingr.endpoints.services.rest.RestMethod;
import io.slingr.endpoints.utils.Json;
import io.slingr.endpoints.ws.exchange.FunctionRequest;
import io.slingr.endpoints.ws.exchange.WebServiceRequest;
import io.slingr.endpoints.ws.exchange.WebServiceResponse;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.Objects;


@SlingrEndpoint(name = "veritone", functionPrefix = "_")
public class VeritoneEndpoint extends HttpEndpoint {
    private final Logger logger = LoggerFactory.getLogger(VeritoneEndpoint.class);

    @EndpointProperty
    private String environment;

    @EndpointProperty
    private String region;

    @EndpointProperty
    private String apiToken;

    public VeritoneEndpoint() { }

    @Override
    public String getApiUri() { return ""; }

    public String getAIDataApiUri() {
        String prefix = "https://api";
        String postfix = ".veritone.com";
        String apiUri="";

        if (Objects.equals(environment, "dev")) {
            apiUri = ".dev";
        } else if (Objects.equals(environment, "stage")) {
            apiUri = ".stage";
        }

        if (Objects.equals(region, "us-1")) {
            apiUri = apiUri + ".us-1";
        } else if (Objects.equals(region, "ca-1")) {
            apiUri = apiUri + ".ca-1";
        } else if (Objects.equals(region, "uk-1")) {
            apiUri = apiUri + ".uk-1";
        } else {
            apiUri = apiUri + region;
        }

        return prefix + apiUri + postfix;
    }

    public String getVoiceApiUri() {
        String prefix = "https://voice2";
        String postfix = ".veritone.com";
        String apiUri="";

        if (Objects.equals(environment, "dev")) {
            apiUri = ".dev";
        } else if (Objects.equals(environment, "stage")) {
            apiUri = ".stage";
        }

        if (Objects.equals(region, "us-1")) {
            apiUri = apiUri + ".us-1";
        } else if (Objects.equals(region, "ca-1")) {
            apiUri = apiUri + ".ca-1";
        } else if (Objects.equals(region, "uk-1")) {
            apiUri = apiUri + ".uk-1";
        } else {
            apiUri = apiUri + region;
        }

        return prefix + apiUri + postfix + "/api";
    }

    public String getProcessingApiUri() { return "https://api.aiware.com"; }

    @Override
    public void endpointStarted() {
        httpService().setAllowExternalUrl(true);
    }

    @EndpointFunction(name = "_get")
    public Json get(FunctionRequest request) {
        request=setFunctionRequestUrl(request);
        setRequestConfig(request);
        return defaultGetRequest(request);
    }

    @EndpointFunction(name = "_post")
    public Json post(FunctionRequest request) {
        request=setFunctionRequestUrl(request);
        setRequestConfig(request);
        return defaultPostRequest(request);
    }

    @EndpointFunction(name = "_put")
    public Json put(FunctionRequest request) {
        request=setFunctionRequestUrl(request);
        setRequestConfig(request);
        return defaultPutRequest(request);
    }

    @EndpointFunction(name = "_patch")
    public Json patch(FunctionRequest request) {
        request=setFunctionRequestUrl(request);
        setRequestConfig(request);
        return defaultPatchRequest(request);
    }

    @EndpointFunction(name = "_delete")
    public Json delete(FunctionRequest request) {
        request=setFunctionRequestUrl(request);
        setRequestConfig(request);
        return defaultDeleteRequest(request);
    }

    // Set the api token in the header
    private FunctionRequest setFunctionRequestUrl(FunctionRequest request) {
        Json requestUpdated = request.toJson();
        Json params = requestUpdated.json("params");
        if (request.getJsonParams().string("path").startsWith("/edge/v1/")) {
            requestUpdated.set("params", params.set("path", getProcessingApiUri() + requestUpdated.json("params").string("path")));
        } else if (request.getJsonParams().string("path").startsWith("/v2/")) {
            requestUpdated.set("params", params.set("path", getVoiceApiUri() + requestUpdated.json("params").string("path")));
        } else {
            requestUpdated.set("params", params.set("path", getAIDataApiUri() + requestUpdated.json("params").string("path")));
        }
        return new FunctionRequest(requestUpdated);
    }

    // Set the correct URL for the request
    private void setRequestConfig(FunctionRequest request) {
        Json body = request.getJsonParams();
        Json headers = body.json("headers");
        if (headers == null) {
            headers = Json.map();
        }
        headers.set("Authorization", "Bearer " + apiToken);
        headers.set("Content-Type", "application/json");
        body.set("headers", headers);
    }

    @EndpointWebService(methods = {RestMethod.POST})
    private WebServiceResponse inboundEvent(WebServiceRequest request) {
        events().send("webhook", request.getJsonBody());
        return new WebServiceResponse();
    }
}