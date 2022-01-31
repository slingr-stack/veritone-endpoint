endpoint.gql = function(query) {
    return endpoint.post('/v3/graphql', {
        query: query
    });
};