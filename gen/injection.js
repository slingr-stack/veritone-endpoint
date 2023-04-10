aiDataGraphqlPost = () => {
    //INIT_INJECTION
    if (!query || !variables) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [query,variables].');
        return;
    }
    var url = parse('/v3/graphql');
    sys.logs.debug('[veritone] POST from: ' + url);
    httpOptions = httpOptions || {};
    httpOptions.query = query;
    httpOptions.variables = variables;
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._post(options);
    //END_INJECTION
}

voiceLexiconLexemeGet = () => {
    //INIT_INJECTION
    if (!lexiconid) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [lexiconid].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/v2/lexicon/:lexiconid/lexeme', [lexiconid]);
            break;
        case 1:
            url = parse('/v2/lexicon/:lexiconid/lexeme/:lexemeid', [lexiconid, lexemeid]);
            break;
        case 2:
            url = parse('/v2/lexicon/:lexiconid/lexeme/:lexemeid', [lexiconid,lexemeid]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[veritone] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
    //END_INJECTION
}

processingAdminServiceConfigGet = () => {
    //INIT_INJECTION
    if (arguments.length === 0){
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [ServiceID].');
        return;
    }

    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/edge/v1/admin/service/:ServiceID/config', [ServiceID]);
            break;
        case 1:
            url = parse('/edge/v1/admin/service/:ServiceID/config/:ConfigSection', [ServiceID, ConfigSection]);
            break;
        case 2:
            url = parse('/edge/v1/admin/service/:ServiceID/config/:ConfigSection/:ConfigKey', [ServiceID, ConfigSection, ConfigKey]);
            break;
        case 3:
            url = parse('/edge/v1/admin/service/:ServiceID/config/:ConfigSection/:ConfigKey', [ServiceID,ConfigSection,ConfigKey]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[veritone] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
    //END_INJECTION
}

aiDataAdminOrganizationsOpenidRolesGet = () => {
    //INIT_INJECTION
    if (aguments.length === 0 || !id) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [id].');
        return;
    }

    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/api/admin/organizations/:id/openid-roles', [id]);
            break;
        case 1:
            url = parse('/api/admin/organizations/:id/openid-roles/:openidRoleKey', [id, openidRoleKey]);
            break;
        case 2:
            url = parse('/api/admin/organizations/:id/openid-roles/:openidRoleKey', [id,openidRoleKey]);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[veritone] GET from: ' + url);
    var options = checkHttpOptions(url, httpOptions);
    return endpoint._get(options);
    //END_INJECTION
}

voiceTtsVoiceGet = () => {
    //INIT_INJECTION
    if (aguments.length === 0 || !voiceId) {
        sys.logs.error('Invalid argument received. This helper should receive the following parameters as non-empty strings: [httpOptions or voiceId].');
        return;
    }
    if(!httpOptions){
        for (var i = 0 ; i < arguments.length; i++){
            if (isObject(arguments[i])){
                httpOptions = arguments[i];
            }
        }
    }
    var url;
    switch(arguments.length-1){
        case 0:
            url = parse('/v2/tts/voice?lang');
            var options = checkHttpOptions(url, voiceId);
            break;
        case 1:
            url = parse('/v2/tts/voice/:voice_id', [voiceId]);
            var options = checkHttpOptions(url, httpOptions);
            break;
        case 2:
            url = parse('/v2/tts/voice/:voice_id', [voiceId]);
            var options = checkHttpOptions(url, httpOptions);
            break;
        default:
            sys.logs.error('Invalid argument received.');
            return;
    }
    sys.logs.debug('[veritone] GET from: ' + url);
    return endpoint._get(options);
    //END_INJECTION
}


module.exports = {
    aiDataGraphqlPost,
    voiceLexiconLexemeGet,
    processingAdminServiceConfigGet,
    aiDataAdminOrganizationsOpenidRolesGet
};