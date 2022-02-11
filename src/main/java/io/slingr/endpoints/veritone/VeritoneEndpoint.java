package io.slingr.endpoints.veritone;

import io.slingr.endpoints.HttpEndpoint;
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


@SlingrEndpoint(name = "veritone", functionPrefix = "_")
public class VeritoneEndpoint extends HttpEndpoint {

    private final Logger logger = LoggerFactory.getLogger(VeritoneEndpoint.class);

    @EndpointProperty
    private String environment;

    @EndpointProperty
    private String apiToken;

    @Override
    public String getApiUri() {
        if (environment.equals("production")) {
            return "https://api.veritone.com";
        } else {
            return "https://api.stage.veritone.com";
        }
    }

    @Override
    public void endpointStarted() {
    }

    @EndpointFunction(name = "_post")
    public Json postRequest(FunctionRequest request) {
        setRequestConfig(request);
        return httpService().defaultPostRequest(request);
    }

    @EndpointWebService(methods = {RestMethod.POST})
    private WebServiceResponse inboundEvent(WebServiceRequest request) {
        events().send("webhook", request.getJsonBody());
        return new WebServiceResponse();
    }

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
}
