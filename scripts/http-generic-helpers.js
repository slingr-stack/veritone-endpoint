////////////////////////////////////
// Public API - Generic Functions //
////////////////////////////////////

endpoint.get = function(url, callbackData, callbacks) {
    var options = checkHttpOptions(url, {});
    return endpoint._get(options, callbackData, callbacks);
};

endpoint.post = function(url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._post(options);
};

endpoint.put = function(url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._put(options);
};

endpoint.patch = function(url, options) {
    options = checkHttpOptions(url, options);
    return endpoint._patch(options);
};

endpoint.delete = function(url) {
    var options = checkHttpOptions(url, {});
    return endpoint._delete(options);
};

endpoint.head = function(url) {
    var options = checkHttpOptions(url, {});
    return endpoint._head(options);
};

endpoint.options = function(url) {
    var options = checkHttpOptions(url, {});
    return endpoint._options(options);
};

///////////////////////
//  Private helpers  //
///////////////////////

var checkHttpOptions = function (url, options) {
    options = options || {};
    if (!!url) {
        if (isObject(url)) {
            // take the 'url' parameter as the options
            options = url || {};
        } else {
            if (!!options.path || !!options.params || !!options.body) {
                // options contains the http package format
                options.path = url;
            } else {
                // create html package
                options = {
                    path: url,
                    body: options
                }
            }
        }
    }
    return options;
};

var isObject = function (obj) {
    return !!obj && stringType(obj) === '[object Object]'
};

var stringType = Function.prototype.call.bind(Object.prototype.toString);