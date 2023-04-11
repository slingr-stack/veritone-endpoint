/**
 * This flow step will a generic request to AI Data API.
 *
 * @param {object} inputs
 * {string} query, This is used to config the query of the request.
 * {string} variables, This is used to config the variables of the request.
 * {boolean} fullResponse, This is used to config full response.
 * {number} connectionTimeout, Read timeout interval, in milliseconds.
 * {number} readTimeout, Connect timeout interval, in milliseconds.
 */
step.apiDataVeritone = function (inputs) {

	var inputsLogic = {
		fullResponse: inputs.fullResponse || false,
		connectionTimeout: inputs.connectionTimeout || 5000,
		readTimeout: inputs.readTimeout || 60000,
		method: 'post',
		query: inputs.query || "",
		variables: inputs.variables || ""
	};

	var options = {
		path: parse('/v3/graphql'),
		query: inputsLogic.query,
		variables: inputsLogic.variables,
		fullResponse : inputsLogic.fullResponse,
		connectionTimeout: inputsLogic.connectionTimeout,
		readTimeout: inputsLogic.readTimeout
	}

	switch (inputsLogic.method.toLowerCase()) {
		case 'get':
			return endpoint._get(options);
		case 'post':
			return endpoint._post(options);
		case 'delete':
			return endpoint._delete(options);
		case 'put':
			return endpoint._put(options);
		case 'connect':
			return endpoint._connect(options);
		case 'head':
			return endpoint._head(options);
		case 'options':
			return endpoint._options(options);
		case 'patch':
			return endpoint._patch(options);
		case 'trace':
			return endpoint._trace(options);
	}

	return null;
};

var parse = function (url, pathVariables){

	var regex = /{([^}]*)}/g;

	if (!url.match(regex)){
		return url;
	}

	if(!pathVariables){
		sys.logs.error('No path variables have been received and the url contains curly brackets\'{}\'');
		throw new Error('Error please contact support.');
	}

	url = url.replace(regex, function(m, i) {
		return pathVariables[i] ? pathVariables[i] : m;
	})

	return url;
}
var isObject = function (obj) {
	return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);

var stringToObject = function (obj) {
	if (!!obj){
		var keyValue = obj.toString().split(',');
		var parseObj = {};
		for(var i = 0; i < keyValue.length; i++) {
			parseObj[keyValue[i].split('=')[0]] = keyValue[i].split('=')[1]
		}
		return parseObj;
	}
	return null;
};