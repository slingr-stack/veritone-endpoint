# Javascript API

The Javascript API of the veritone endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST`,`PUT`,`DELETE`,`GET`,`PATCH` requests to the [veritone API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.veritone.post('/v2/lexicon/:lexiconid/lexeme/preview', body)
var response = app.endpoints.veritone.post('/v2/lexicon/:lexiconid/lexeme/preview')
var response = app.endpoints.veritone.put('/api/admin/organizations/:orgId', body)
var response = app.endpoints.veritone.put('/api/admin/organizations/:orgId')
var response = app.endpoints.veritone.delete('/v2/lexicon/:lexiconid/lexeme/:lexemeid')
var response = app.endpoints.veritone.get('/api/admin/users')
var response = app.endpoints.veritone.patch('/api/admin/organizations/:id/applications', body)
var response = app.endpoints.veritone.patch('/api/admin/organizations/:id/applications')
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v3/graphql/:query/:variables'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/v3/graphqldocs/
```javascript
app.endpoints.veritone.aiData.graphql.post(query, variables, body)
```
---
* API URL: '/api/admin/applications'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.post(body)
```
---
* API URL: '/api/admin/applications/:applicationId/submit'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.submit.post(applicationId, body)
```
---
* API URL: '/api/admin/applications/:applicationId/approve'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.approve.post(applicationId, body)
```
---
* API URL: '/api/admin/applications/:applicationId/reject'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.reject.post(applicationId, body)
```
---
* API URL: '/api/admin/applications/:applicationId/deploy'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.deploy.post(applicationId, body)
```
---
* API URL: '/api/admin/applications/:applicationId/disable'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.disable.post(applicationId, body)
```
---
* API URL: '/api/admin/applications/:applicationId/enable'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.enable.post(applicationId, body)
```
---
* API URL: '/api/admin/external-credentials'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.externalCredentials.post(body)
```
---
* API URL: '/api/admin/signup/assign-vertical'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.signup.assignVertical.post(body)
```
---
* API URL: '/api/admin/login'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.login.post(body)
```
---
* API URL: '/api/admin/password/request-reset'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.password.requestReset.post(body)
```
---
* API URL: '/api/admin/password/reset'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.password.reset.post(body)
```
---
* API URL: '/api/admin/password-token'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.passwordToken.post(body)
```
---
* API URL: '/api/admin/mfa/verify/:token'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.mfa.verify.post(token, body)
```
---
* API URL: '/api/admin/org-invite/password/reset'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.orgInvite.password.reset.post(body)
```
---
* API URL: '/api/admin/openid/linkUserToOid'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.openid.linkUserToOid.post(body)
```
---
* API URL: '/api/admin/organizations/:id/openid-roles'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.openidRoles.post(id, body)
```
---
* API URL: '/api/admin/organizations/:orgId/paymentToken'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.paymentToken.post(orgId, body)
```
---
* API URL: '/analytics/qlik/organization/:organizationId/init'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.analytics.qlik.organization.init.post(organizationId, body)
```
---
* API URL: '/api/admin/users/:userId/mfa/register'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.mfa.register.post(userId, body)
```
---
* API URL: '/api/admin/users/:userId/mfa/register/verify/:type/:token'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.mfa.register.verify.post(userId, type, token, body)
```
---
* API URL: '/api/admin/users/:userId/mfa/unregister/:type'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.mfa.unregister.post(userId, type, body)
```
---
* API URL: '/api/admin/signup'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.signup.post(body)
```
---
* API URL: '/api/admin/signup/resend'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.signup.resend.post(body)
```
---
* API URL: '/api/admin/signup/verify'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.signup.verify.post(body)
```
---
* API URL: '/api/admin/users'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.post(body)
```
---
* API URL: '/api/admin/users/:userId/roles/:roleId'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.roles.post(userId, roleId, body)
```
---
* API URL: '/api/admin/users/:id/force-password-reset'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.forcePasswordReset.post(id, body)
```
---
* API URL: '/api/admin/users/me/user-settings'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.userSettings.post(body)
```
---
* API URL: '/api/admin/users/me/accept-terms'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.acceptTerms.post(body)
```
---
* API URL: '/api/admin/users/me/accept-dev-terms'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.acceptDevTerms.post(body)
```
---
* API URL: '/api/admin/users/me/change-password'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.changePassword.post(body)
```
---
* API URL: '/api/admin/users/me/set-developer-organization-fields'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.setDeveloperOrganizationFields.post(body)
```
---
* API URL: '/api/admin/users/me/mfa/register'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.mfa.register.post(body)
```
---
* API URL: '/api/admin/users/me/mfa/register/verify/:type/:token'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.mfa.register.verify.post(type, token, body)
```
---
* API URL: '/api/admin/users/me/mfa/unregister/:type'
* HTTP Method: 'POST'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.mfa.unregister.post(type, body)
```
---
* API URL: '/v2/project'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.post(body)
```
---
* API URL: '/v2/project/:projectid/tts/clip'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.tts.clip.post(projectid, body)
```
---
* API URL: '/v2/project/:projectid/sts/clip'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.sts.clip.post(projectid, body)
```
---
* API URL: '/v2/tts/preview'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.tts.preview.post(body)
```
---
* API URL: '/v2/project/:projectid/tts/clip/:clipid/convert'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.tts.clip.convert.post(projectid, clipid, body)
```
---
* API URL: '/v2/project/:projectid/sts/clip/:clipid/convert'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.sts.clip.convert.post(projectid, clipid, body)
```
---
* API URL: '/v2/lexicon'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.post(body)
```
---
* API URL: '/v2/lexicon/:lexiconid/lexeme'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.lexeme.post(lexiconid, body)
```
---
* API URL: '/v2/lexicon/:lexiconid/lexeme/preview'
* HTTP Method: 'POST'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.lexeme.preview.post(lexiconid, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/engine'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.engine.post(ResourceID, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/service'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.service.post(ResourceID, body)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/add'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.add.post(ServerTypeID, body)
```
---
* API URL: '/edge/v1/admin/terminate'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.terminate.post(body)
```
---
* API URL: '/edge/v1/admin/licenses/apply'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.licenses.apply.post(body)
```
---
* API URL: '/edge/v1/admin/auth'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.auth.post(body)
```
---
* API URL: '/edge/v1/admin/backlog/clear'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.backlog.clear.post(body)
```
---
* API URL: '/edge/v1/admin/applications/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.applications.create.post(body)
```
---
* API URL: '/edge/v1/admin/cores/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.cores.create.post(body)
```
---
* API URL: '/edge/v1/admin/organizations/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.organizations.create.post(body)
```
---
* API URL: '/edge/v1/admin/users/permission/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.permission.create.post(body)
```
---
* API URL: '/edge/v1/admin/resource/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.create.post(body)
```
---
* API URL: '/edge/v1/admin/users/role/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.role.create.post(body)
```
---
* API URL: '/edge/v1/admin/server_types/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverTypes.create.post(body)
```
---
* API URL: '/edge/v1/admin/server_types/running_engine/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverTypes.runningEngine.create.post(body)
```
---
* API URL: '/edge/v1/admin/service/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.service.create.post(body)
```
---
* API URL: '/edge/v1/admin/tokens/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.tokens.create.post(body)
```
---
* API URL: '/edge/v1/admin/users/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.create.post(body)
```
---
* API URL: '/edge/v1/admin/applications/:ApplicationID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.applications.delete.post(ApplicationID, body)
```
---
* API URL: '/edge/v1/admin/organization/:OrganizationID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.organization.delete.post(OrganizationID, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.delete.post(ResourceID, body)
```
---
* API URL: '/edge/v1/admin/users/role/:RoleID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.role.delete.post(RoleID, body)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.delete.post(ServerTypeID, body)
```
---
* API URL: '/edge/v1/admin/services/:ServiceID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.services.delete.post(ServiceID, body)
```
---
* API URL: '/edge/v1/admin/token/:TokenID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.token.delete.post(TokenID, body)
```
---
* API URL: '/edge/v1/admin/user/:UserID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.user.delete.post(UserID, body)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/desired'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.desired.post(ServerTypeID, body)
```
---
* API URL: '/edge/v1/admin/users/login'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.login.post(body)
```
---
* API URL: '/edge/v1/admin/users/oauth2_login'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.oauth2Login.post(body)
```
---
* API URL: '/edge/v1/admin/users/register'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.register.post(body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/engine/:EngineID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.engine.delete.post(ResourceID, EngineID, body)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/remove'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.remove.post(ServerTypeID, body)
```
---
* API URL: '/edge/v1/admin/backlog/reset-alloc'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.backlog.resetAlloc.post(body)
```
---
* API URL: '/edge/v1/admin/users/signup/initial'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.signup.initial.post(body)
```
---
* API URL: '/edge/v1/admin/core/:CoreID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.core.update.post(CoreID, body)
```
---
* API URL: '/edge/v1/admin/applications/:ApplicationID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.applications.update.post(ApplicationID, body)
```
---
* API URL: '/edge/v1/admin/config'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.post(body)
```
---
* API URL: '/edge/v1/admin/config/:ConfigSection'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.post(ConfigSection, body)
```
---
* API URL: '/edge/v1/admin/config/:ConfigSection/:ConfigKey'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.post(ConfigSection, ConfigKey, body)
```
---
* API URL: '/edge/v1/admin/config/:ConfigSection/:ConfigKey'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.post(ConfigSection, ConfigKey, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/engine/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.engine.update.post(ResourceID, body)
```
---
* API URL: '/edge/v1/admin/organization/:OrganizationID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.organization.update.post(OrganizationID, body)
```
---
* API URL: '/edge/v1/admin/users/permission/:PermissionID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.permission.update.post(PermissionID, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.update.post(ResourceID, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/mapping/:ResourceMappingID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.mapping.update.post(ResourceID, ResourceMappingID, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/mapping/:ResourceMappingID/updatestate'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.mapping.updatestate.post(ResourceID, ResourceMappingID, body)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/updatestate'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.updatestate.post(ResourceID, body)
```
---
* API URL: '/edge/v1/admin/users/role/:RoleID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.role.update.post(RoleID, body)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.update.post(ServerTypeID, body)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/engine/:EngineID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.engine.update.post(ServerTypeID, EngineID, body)
```
---
* API URL: '/edge/v1/admin/service/:ServiceID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.service.update.post(ServiceID, body)
```
---
* API URL: '/edge/v1/admin/token/:TokenID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.token.update.post(TokenID, body)
```
---
* API URL: '/edge/v1/admin/user/:UserID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.user.update.post(UserID, body)
```
---
* API URL: '/edge/v1/admin/users/password/forgot'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.password.forgot.post(body)
```
---
* API URL: '/edge/v1/admin/users/password/reset'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.password.reset.post(body)
```
---
* API URL: '/edge/v1/admin/users/password/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.password.update.post(body)
```
---
* API URL: '/edge/v1/admin/build/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.build.create.post(body)
```
---
* API URL: '/edge/v1/admin/engine/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.create.post(body)
```
---
* API URL: '/edge/v1/admin/engine/category/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.category.create.post(body)
```
---
* API URL: '/edge/v1/engine/:EngineID/createjob'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.createjob.post(EngineID, body)
```
---
* API URL: '/edge/v1/admin/build/:BuildID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.build.delete.post(BuildID, body)
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.delete.post(EngineID, body)
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/getwork'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.getwork.post(EngineInstanceID, body)
```
---
* API URL: '/edge/v1/proc/jobs/backlog_count_by_engine'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.jobs.backlogCountByEngine.post(body)
```
---
* API URL: '/edge/v1/admin/build/:BuildID/pause'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.build.pause.post(BuildID, body)
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/pause'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.pause.post(EngineID, body)
```
---
* API URL: '/edge/v1/engine/instance/register'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.register.post(body)
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/replace'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.replace.post(EngineID, body)
```
---
* API URL: '/edge/v1/admin/build/:BuildID/resume'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.build.resume.post(BuildID, body)
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/resume'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.resume.post(EngineID, body)
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/terminate'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.terminate.post(EngineInstanceID, body)
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.update.post(EngineID, body)
```
---
* API URL: '/edge/v1/admin/build/:BuildID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.build.update.post(BuildID, body)
```
---
* API URL: '/edge/v1/engine/build/:BuildID/state'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.build.state.post(BuildID, body)
```
---
* API URL: '/edge/v1/admin/engine/category/:EngineCategoryID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.category.update.post(EngineCategoryID, body)
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/updatestatus'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.updatestatus.post(EngineInstanceID, body)
```
---
* API URL: '/edge/v1/engine/:EngineID/template/:EngineTemplateName'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.template.post(EngineID, EngineTemplateName, body)
```
---
* API URL: '/edge/v1/flow/nrcontainer/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.flow.nrcontainer.create.post(body)
```
---
* API URL: '/edge/v1/flow/delete/:ContainerID'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.flow.delete.post(ContainerID, body)
```
---
* API URL: '/edge/v1/flow/request/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.flow.request.update.post(body)
```
---
* API URL: '/edge/v1/flow/:HostID/updatestatus'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.flow.updatestatus.post(HostID, body)
```
---
* API URL: '/edge/v1/host/:HostID/drain'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.drain.post(HostID, body)
```
---
* API URL: '/edge/v1/host/alert'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.alert.post(body)
```
---
* API URL: '/edge/v1/host/launch'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.launch.post(body)
```
---
* API URL: '/edge/v1/host/:HostID/pause'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.pause.post(HostID, body)
```
---
* API URL: '/edge/v1/host/:HostID/engine/register'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.engine.register.post(HostID, body)
```
---
* API URL: '/edge/v1/host/register'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.register.post(body)
```
---
* API URL: '/edge/v1/host/:HostID/resume'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.resume.post(HostID, body)
```
---
* API URL: '/edge/v1/host/:HostID/terminate'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.terminate.post(HostID, body)
```
---
* API URL: '/edge/v1/host/:HostID/updatestatus'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.updatestatus.post(HostID, body)
```
---
* API URL: '/edge/v1/proc/job/:JobID/addtask'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.addtask.post(JobID, body)
```
---
* API URL: '/edge/v1/proc/job/:JobID/addtaskroute'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.addtaskroute.post(JobID, body)
```
---
* API URL: '/edge/v1/proc/jobs/cancel'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.jobs.cancel.post(body)
```
---
* API URL: '/edge/v1/proc/job/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.create.post(body)
```
---
* API URL: '/edge/v1/proc/job/:JobID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.delete.post(JobID, body)
```
---
* API URL: '/edge/v1/proc/scheduled_job/:ScheduledJobID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.scheduledJob.delete.post(ScheduledJobID, body)
```
---
* API URL: '/edge/v1/proc/task/:TaskID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.delete.post(TaskID, body)
```
---
* API URL: '/edge/v1/proc/template/:TemplateID/launch'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.template.launch.post(TemplateID, body)
```
---
* API URL: '/edge/v1/proc/endpoint/:Endpoint'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.endpoint.post(Endpoint, body)
```
---
* API URL: '/edge/v1/proc/tasks/update_status'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.updateStatus.post(body)
```
---
* API URL: '/edge/v1/proxy/:HostID/getwork'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proxy.getwork.post(HostID, body)
```
---
* API URL: '/edge/v1/proxy/:HostID/register'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proxy.register.post(HostID, body)
```
---
* API URL: '/edge/v1/proxy/:HostID/terminate'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proxy.terminate.post(HostID, body)
```
---
* API URL: '/edge/v1/proxy/:HostID/update'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proxy.update.post(HostID, body)
```
---
* API URL: '/edge/v1/security/getstorageserverpublickeyset'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.security.getstorageserverpublickeyset.post(body)
```
---
* API URL: '/edge/v1/service/instance/create'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.service.instance.create.post(body)
```
---
* API URL: '/edge/v1/service/instance/:ServiceInstanceID/delete'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.service.instance.delete.post(ServiceInstanceID, body)
```
---
* API URL: '/api/admin/applications/:applicationId/event-endpoint'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.eventEndpoint.put(applicationId, body)
```
---
* API URL: '/api/admin/applications/:applicationId'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.put(applicationId, body)
```
---
* API URL: '/api/admin/external-credentials/:externalCredentialId'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.externalCredentials.put(externalCredentialId, body)
```
---
* API URL: '/api/integration/:integrationId/org/:orgId'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.integration.org.put(integrationId, orgId, body)
```
---
* API URL: '/api/admin/organizations/:id/openid-roles/:openidRoleKey'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.openidRoles.put(id, openidRoleKey, body)
```
---
* API URL: '/api/admin/organizations/:id/integration/:integrationId'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.integration.put(id, integrationId, body)
```
---
* API URL: '/api/admin/organizations/:orgId'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.put(orgId, body)
```
---
* API URL: '/analytics/qlik/stream/:streamName'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.analytics.qlik.stream.put(streamName, body)
```
---
* API URL: '/api/admin/users/:userId/mfa/default/:type'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.mfa.default.put(userId, type, body)
```
---
* API URL: '/api/admin/users/:id'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.put(id, body)
```
---
* API URL: '/api/admin/users/me/user-settings'
* HTTP Method: 'PUT'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.userSettings.put(body)
```
---
* API URL: '/v2/project/:projectid'
* HTTP Method: 'PUT'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.put(projectid, body)
```
---
* API URL: '/v2/project/:projectid/tts/clip/:clipid'
* HTTP Method: 'PUT'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.tts.clip.put(projectid, clipid, body)
```
---
* API URL: '/v2/project/:projectid/tts/clip/:clipid/upload'
* HTTP Method: 'PUT'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.tts.clip.upload.put(projectid, clipid, body)
```
---
* API URL: '/v2/lexicon/:lexiconid'
* HTTP Method: 'PUT'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.put(lexiconid, body)
```
---
* API URL: '/api/admin/applications/:applicationId/event-endpoint'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.eventEndpoint.delete(applicationId)
```
---
* API URL: '/api/admin/applications/:applicationId'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.delete(applicationId)
```
---
* API URL: '/api/admin/organizations/:id/applications'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.applications.delete(id)
```
---
* API URL: '/api/admin/external-credentials/:externalCredentialId'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.externalCredentials.delete(externalCredentialId)
```
---
* API URL: '/api/admin/organizations/:id/openid-roles/:openidRoleKey'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.openidRoles.delete(id, openidRoleKey)
```
---
* API URL: '/api/admin/organizations/:id/integration/:integrationId'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.integration.delete(id, integrationId)
```
---
* API URL: '/api/admin/openid/user/:userId/connection/:connectId'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.openid.user.connection.delete(userId, connectId)
```
---
* API URL: '/api/admin/users/:id'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.delete(id)
```
---
* API URL: '/api/admin/users/:userId/roles/:roleId'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.roles.delete(userId, roleId)
```
---
* API URL: '/api/admin/users/me/user-settings/:key'
* HTTP Method: 'DELETE'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.userSettings.delete(key)
```
---
* API URL: '/v2/project/:projectid'
* HTTP Method: 'DELETE'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.delete(projectid)
```
---
* API URL: '/v2/project/:projectid/tts/clip/:clipid'
* HTTP Method: 'DELETE'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.tts.clip.delete(projectid, clipid)
```
---
* API URL: '/v2/project/:projectid/sts/clip/:clipid'
* HTTP Method: 'DELETE'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.sts.clip.delete(projectid, clipid)
```
---
* API URL: '/v2/lexicon/:lexiconid'
* HTTP Method: 'DELETE'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.delete(lexiconid)
```
---
* API URL: '/v2/lexicon/:lexiconid/lexeme/:lexemeid'
* HTTP Method: 'DELETE'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.lexeme.delete(lexiconid, lexemeid)
```
---
* API URL: '/edge/v1/admin/licenses/:LicenseID/delete'
* HTTP Method: 'DELETE'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.licenses.delete.delete(LicenseID)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/delete'
* HTTP Method: 'DELETE'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.delete.delete(ServerTypeID)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/engine/:EngineID/delete'
* HTTP Method: 'DELETE'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.engine.delete.delete(ServerTypeID, EngineID)
```
---
* API URL: '/edge/v1/engine/:EngineID/template/:EngineTemplateName'
* HTTP Method: 'DELETE'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.template.delete(EngineID, EngineTemplateName)
```
---
* API URL: '/api/admin/applications'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.get()
```
---
* API URL: '/api/admin/applications/:applicationId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.get(applicationId)
```
---
* API URL: '/api/admin/applications/:applicationId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.applications.get()
```
---
* API URL: '/api/admin/external-credentials'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.externalCredentials.get()
```
---
* API URL: '/api/admin/external-credentials/:externalCredentialId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.externalCredentials.get(externalCredentialId)
```
---
* API URL: '/api/admin/external-credentials/:externalCredentialId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.externalCredentials.get()
```
---
* API URL: '/api/admin/current-user'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.currentUser.get()
```
---
* API URL: '/api/admin/users/me/applications'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.applications.get()
```
---
* API URL: '/api/admin/users/me/refresh-user-cache'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.refreshUserCache.get()
```
---
* API URL: '/api/admin/signup/assign-vertical/:cloneId/clone-progress'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.signup.assignVertical.cloneProgress.get(cloneId)
```
---
* API URL: '/api/admin/signup/initial/:token'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.signup.initial.get(token)
```
---
* API URL: '/api/admin/token/:token'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.token.get(token)
```
---
* API URL: '/api/admin/token/:token/logout'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.token.logout.get(token)
```
---
* API URL: '/api/admin/token/:token/refresh'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.token.refresh.get(token)
```
---
* API URL: '/api/admin/token/:token/extend'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.token.extend.get(token)
```
---
* API URL: '/api/admin/mfa/:type/token'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.mfa.token.get(type)
```
---
* API URL: '/api/admin/bearer/:token'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.bearer.get(token)
```
---
* API URL: '/api/admin/users/:id/reload'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.reload.get(id)
```
---
* API URL: '/api/admin/organization/:orgId/integration/:integrationId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organization.integration.get(orgId, integrationId)
```
---
* API URL: '/api/admin/groups/application/organization'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.groups.application.organization.get()
```
---
* API URL: '/api/admin/organizations/:orgId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.get(orgId)
```
---
* API URL: '/api/admin/organizations/:orgId/roles'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.roles.get(orgId)
```
---
* API URL: '/api/admin/organizations/:id/integrations'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.integrations.get(id)
```
---
* API URL: '/api/admin/organizations/:orgId/paymentToken'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.paymentToken.get(orgId)
```
---
* API URL: '/api/admin/organizations/:orgId/invoices'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.invoices.get(orgId)
```
---
* API URL: '/api/admin/integration/:integrationId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.integration.get(integrationId)
```
---
* API URL: '/api/admin/permissions'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.permissions.get()
```
---
* API URL: '/api/admin/permissions/:permId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.permissions.get(permId)
```
---
* API URL: '/api/admin/permissions/:permId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.permissions.get()
```
---
* API URL: '/analytics/qlik/app'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.analytics.qlik.app.get()
```
---
* API URL: '/analytics/qlik/app/:appId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.analytics.qlik.app.get(appId)
```
---
* API URL: '/analytics/qlik/app/:appId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.analytics.qlik.app.get()
```
---
* API URL: '/analytics/qlik/app/:appId/sheet'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.analytics.qlik.app.sheet.get(appId)
```
---
* API URL: '/api/admin/tokens/organizations/:organizationId/tokens/all'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.tokens.organizations.tokens.all.get(organizationId)
```
---
* API URL: '/api/admin/users/:userId/mfa'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.mfa.get(userId)
```
---
* API URL: '/api/admin/roles'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.roles.get()
```
---
* API URL: '/api/admin/roles/:roleId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.roles.get(roleId)
```
---
* API URL: '/api/admin/roles/:roleId'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.roles.get()
```
---
* API URL: '/api/admin/roles/:roleId/permissions'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.roles.permissions.get(roleId)
```
---
* API URL: '/api/admin/signup/verify/:userName'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.signup.verify.get(userName)
```
---
* API URL: '/api/admin/users'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.get()
```
---
* API URL: '/api/admin/users/:id'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.get(id)
```
---
* API URL: '/api/admin/users/:id'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.get()
```
---
* API URL: '/api/admin/users/:id/permissions'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.permissions.get(id)
```
---
* API URL: '/api/admin/users/:id/scim_connect_ids'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.scimConnectIds.get(id)
```
---
* API URL: '/api/admin/users/me/user-settings'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.userSettings.get()
```
---
* API URL: '/api/admin/users/me/mfa'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.users.me.mfa.get()
```
---
* API URL: '/api/admin/username/:email/available'
* HTTP Method: 'GET'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.username.available.get(email)
```
---
* API URL: '/v2/project/:projectid'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.get(projectid)
```
---
* API URL: '/v2/projects'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.projects.get()
```
---
* API URL: '/v2/project/:projectid/clips'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.clips.get(projectid)
```
---
* API URL: '/v2/project/:projectid/tts/clip/:clipid'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.tts.clip.get(projectid, clipid)
```
---
* API URL: '/v2/project/:projectid/sts/clip/:clipid'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.project.sts.clip.get(projectid, clipid)
```
---
* API URL: '/v2/sts/voices?lang'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.sts.voices.get()
```
---
* API URL: '/v2/lexicon'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.get()
```
---
* API URL: '/v2/lexicon/:lexicon_id'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.get(lexiconId)
```
---
* API URL: '/v2/lexicon/:lexicon_id'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.lexicon.get()
```
---
* API URL: '/v2/tts/voice?lang'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.tts.voice.get()
```
---
* API URL: '/v2/tts/voice/:voice_id'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.tts.voice.get(voiceId)
```
---
* API URL: '/v2/tts/voice/:voice_id'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.tts.voice.get()
```
---
* API URL: '/v2/tts/voice/:voice_id/versions'
* HTTP Method: 'GET'
* More info: https://voice-docs.veritone-ce.com/
```javascript
app.endpoints.veritone.voice.tts.voice.versions.get(voiceId)
```
---
* API URL: '/edge/v1/admin/application/:ApplicationID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.application.detail.get(ApplicationID)
```
---
* API URL: '/edge/v1/admin/core/:CoreID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.core.detail.get(CoreID)
```
---
* API URL: '/edge/v1/admin/cores'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.cores.get()
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/config/:ConfigSection/:ConfigKey'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.config.get(EngineID, ConfigSection, ConfigKey)
```
---
* API URL: '/edge/v1/admin/organization/:OrganizationID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.organization.detail.get(OrganizationID)
```
---
* API URL: '/edge/v1/admin/organization/:OrganizationID/tokens'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.organization.tokens.get(OrganizationID)
```
---
* API URL: '/edge/v1/admin/organizations'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.organizations.get()
```
---
* API URL: '/edge/v1/admin/users/permission/:PermissionID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.permission.detail.get(PermissionID)
```
---
* API URL: '/edge/v1/admin/users/role/:RoleID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.role.detail.get(RoleID)
```
---
* API URL: '/edge/v1/admin/service/instances'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.service.instances.get()
```
---
* API URL: '/edge/v1/admin/service/:ServiceID/instances'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.service.instances.get(ServiceID)
```
---
* API URL: '/edge/v1/admin/service/:ServiceID/instances'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.service.instances.get()
```
---
* API URL: '/edge/v1/admin/status'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.status.get()
```
---
* API URL: '/edge/v1/admin/token/:TokenID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.token.detail.get(TokenID)
```
---
* API URL: '/edge/v1/admin/token/:TokenID/permissions'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.token.permissions.get(TokenID)
```
---
* API URL: '/edge/v1/admin/tokens'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.tokens.get()
```
---
* API URL: '/edge/v1/admin/user/:UserID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.user.detail.get(UserID)
```
---
* API URL: '/edge/v1/admin/user/:UserID/permissions'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.user.permissions.get(UserID)
```
---
* API URL: '/edge/v1/admin/user/:UserID/tokens'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.user.tokens.get(UserID)
```
---
* API URL: '/edge/v1/admin/users'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.get()
```
---
* API URL: '/edge/v1/admin/users/permissions'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.permissions.get()
```
---
* API URL: '/edge/v1/admin/users/roles'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.users.roles.get()
```
---
* API URL: '/edge/v1/admin/applications'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.applications.get()
```
---
* API URL: '/edge/v1/admin/backlog/summary'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.backlog.summary.get()
```
---
* API URL: '/edge/v1/admin/config'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.get()
```
---
* API URL: '/edge/v1/admin/config/:ConfigSection'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.get(ConfigSection)
```
---
* API URL: '/edge/v1/admin/config/:ConfigSection/:ConfigKey'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.get(ConfigSection, ConfigKey)
```
---
* API URL: '/edge/v1/admin/config/:ConfigSection/:ConfigKey'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.config.get(ConfigSection)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/engines'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.engines.get(ResourceID)
```
---
* API URL: '/edge/v1/admin/licenses/:LicenseID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.licenses.detail.get(LicenseID)
```
---
* API URL: '/edge/v1/admin/licenses'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.licenses.get()
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/mappings'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.mappings.get(ResourceID)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.get(ResourceID)
```
---
* API URL: '/edge/v1/admin/resource/:ResourceID/mapping/:ResourceMappingID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resource.mapping.detail.get(ResourceID, ResourceMappingID)
```
---
* API URL: '/edge/v1/admin/resources'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.resources.get()
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/resources'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.resources.get(EngineID)
```
---
* API URL: '/edge/v1/admin/host/:HostID/resources'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.host.resources.get(HostID)
```
---
* API URL: '/edge/v1/admin/service/:ServiceID/resources'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.service.resources.get(ServiceID)
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.detail.get(ServerTypeID)
```
---
* API URL: '/edge/v1/admin/server_types/running_engines'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverTypes.runningEngines.get()
```
---
* API URL: '/edge/v1/admin/server_type/:ServerTypeID/engine/:EngineID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverType.engine.detail.get(ServerTypeID, EngineID)
```
---
* API URL: '/edge/v1/admin/server_types'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.serverTypes.get()
```
---
* API URL: '/edge/v1/admin/service/:ServiceID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.service.detail.get(ServiceID)
```
---
* API URL: '/edge/v1/admin/services'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.services.get()
```
---
* API URL: '/edge/v1/admin/build/:BuildID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.build.detail.get(BuildID)
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/builds'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.builds.get(EngineID)
```
---
* API URL: '/edge/v1/engine/builds'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.builds.get()
```
---
* API URL: '/edge/v1/engine/builds/downloads'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.builds.downloads.get()
```
---
* API URL: '/edge/v1/admin/engine/categories'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.categories.get()
```
---
* API URL: '/edge/v1/admin/engine/category/:EngineCategoryID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.category.detail.get(EngineCategoryID)
```
---
* API URL: '/edge/v1/engine/container_count'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.containerCount.get()
```
---
* API URL: '/edge/v1/admin/engine/:EngineID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.detail.get(EngineID)
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.detail.get(EngineInstanceID)
```
---
* API URL: '/edge/v1/engine/instances'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instances.get()
```
---
* API URL: '/edge/v1/engine/:EngineID/instances'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instances.get(EngineID)
```
---
* API URL: '/edge/v1/engine/:EngineID/instances'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instances.get()
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/logs'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.logs.get(EngineInstanceID)
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/status'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.status.get(EngineInstanceID)
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/workdetail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.workdetail.get(EngineInstanceID)
```
---
* API URL: '/edge/v1/engine/:EngineID/launch/:LaunchID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.launch.detail.get(EngineID, LaunchID)
```
---
* API URL: '/edge/v1/engine/:EngineID/launches'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.launches.get(EngineID)
```
---
* API URL: '/edge/v1/admin/engine/stats'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engine.stats.get()
```
---
* API URL: '/edge/v1/engine/:EngineID/template/:EngineTemplateName'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.template.get(EngineID, EngineTemplateName)
```
---
* API URL: '/edge/v1/admin/engines'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.admin.engines.get()
```
---
* API URL: '/edge/v1/engine/instance/:EngineInstanceID/resources'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.instance.resources.get(EngineInstanceID)
```
---
* API URL: '/edge/v1/flowaction/requests/clean'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.flowaction.requests.clean.get()
```
---
* API URL: '/edge/v1/automate/containers'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.automate.containers.get()
```
---
* API URL: '/edge/v1/hosts/cpu_usage'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.hosts.cpuUsage.get()
```
---
* API URL: '/edge/v1/host/:HostID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.detail.get(HostID)
```
---
* API URL: '/edge/v1/engine/memory_usage'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.engine.memoryUsage.get()
```
---
* API URL: '/edge/v1/host/:HostID/status'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.status.get(HostID)
```
---
* API URL: '/edge/v1/hosts'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.hosts.get()
```
---
* API URL: '/edge/v1/hosts/counts'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.hosts.counts.get()
```
---
* API URL: '/edge/v1/hosts/counts_by_type'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.hosts.countsByType.get()
```
---
* API URL: '/edge/v1/host/:HostID/launch'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.host.launch.get(HostID)
```
---
* API URL: '/edge/v1/proc/tasks/error/engine_error_time_ranges'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.error.engineErrorTimeRanges.get()
```
---
* API URL: '/edge/v1/proc/job/:JobID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.detail.get(JobID)
```
---
* API URL: '/edge/v1/proc/job/:JobID/download/:JobOutputName'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.download.get(JobID, JobOutputName)
```
---
* API URL: '/edge/v1/proc/job/:JobID/output/:JobOutputName'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.output.get(JobID, JobOutputName)
```
---
* API URL: '/edge/v1/proc/job/:JobID/outputs'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.outputs.get(JobID)
```
---
* API URL: '/edge/v1/proc/job/:JobID/performance'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.performance.get(JobID)
```
---
* API URL: '/edge/v1/proc/job/:JobID/status'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.status.get(JobID)
```
---
* API URL: '/edge/v1/proc/job/:JobID/workrequests'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.workrequests.get(JobID)
```
---
* API URL: '/edge/v1/proc/jobs'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.jobs.get()
```
---
* API URL: '/edge/v1/proc/jobs/stats/organization'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.jobs.stats.organization.get()
```
---
* API URL: '/edge/v1/proc/jobs/performance'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.jobs.performance.get()
```
---
* API URL: '/edge/v1/proc/jobs/stats'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.jobs.stats.get()
```
---
* API URL: '/edge/v1/proc/jobs/stats/time_ranges'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.jobs.stats.timeRanges.get()
```
---
* API URL: '/edge/v1/proc/scheduled_jobs/rate_pending_time_ranges'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.scheduledJobs.ratePendingTimeRanges.get()
```
---
* API URL: '/edge/v1/proc/scheduled_job/:ScheduledJobID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.scheduledJob.detail.get(ScheduledJobID)
```
---
* API URL: '/edge/v1/proc/scheduled_jobs'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.scheduledJobs.get()
```
---
* API URL: '/edge/v1/proc/tasks/error/server_error_counts'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.error.serverErrorCounts.get()
```
---
* API URL: '/edge/v1/proc/task/:TaskID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.detail.get(TaskID)
```
---
* API URL: '/edge/v1/proc/task/:TaskID/download/:TaskOutputName'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.download.get(TaskID, TaskOutputName)
```
---
* API URL: '/edge/v1/proc/task/:TaskID/logs'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.logs.get(TaskID)
```
---
* API URL: '/edge/v1/proc/task/:TaskID/output/:TaskOutputName'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.output.get(TaskID, TaskOutputName)
```
---
* API URL: '/edge/v1/proc/task/:TaskID/outputs'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.outputs.get(TaskID)
```
---
* API URL: '/edge/v1/proc/task/reports'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.reports.get()
```
---
* API URL: '/edge/v1/proc/task/reports/:ReportMonth'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.reports.get(ReportMonth)
```
---
* API URL: '/edge/v1/proc/task/reports/:ReportMonth'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.reports.get()
```
---
* API URL: '/edge/v1/proc/tasks/sync_backlog'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.syncBacklog.get()
```
---
* API URL: '/edge/v1/proc/task/:TaskID/timings'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.timings.get(TaskID)
```
---
* API URL: '/edge/v1/proc/tasks'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.get()
```
---
* API URL: '/edge/v1/proc/tasks/error/count_type_by_engine'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.error.countTypeByEngine.get()
```
---
* API URL: '/edge/v1/proc/tasks/errors'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.errors.get()
```
---
* API URL: '/edge/v1/proc/tasks/instances/by_category_host'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.instances.byCategoryHost.get()
```
---
* API URL: '/edge/v1/proc/tasks/stats'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.stats.get()
```
---
* API URL: '/edge/v1/proc/tasks/stats/categories'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.stats.categories.get()
```
---
* API URL: '/edge/v1/proc/tasks/stats/engines'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.stats.engines.get()
```
---
* API URL: '/edge/v1/proc/tasks/stats/organizations'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.stats.organizations.get()
```
---
* API URL: '/edge/v1/proc/tasks/stats/time_ranges'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.stats.timeRanges.get()
```
---
* API URL: '/edge/v1/proc/scheduled_jobs/total_pending_time_ranges'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.scheduledJobs.totalPendingTimeRanges.get()
```
---
* API URL: '/edge/v1/proc/workrequest/:WorkRequestID/detail'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.workrequest.detail.get(WorkRequestID)
```
---
* API URL: '/edge/v1/proc/task/listreports'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.task.listreports.get()
```
---
* API URL: '/edge/v1/proc/job/:JobID/recheck_status'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.job.recheckStatus.get(JobID)
```
---
* API URL: '/edge/v1/proc/tasks/stats/export'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.proc.tasks.stats.export.get()
```
---
* API URL: '/edge/v1/service/instance/:ServiceInstanceID/resources'
* HTTP Method: 'GET'
* More info: https://docs.veritone.com/#/api/md/docs-md/README
```javascript
app.endpoints.veritone.processing.service.instance.resources.get(ServiceInstanceID)
```
---
* API URL: '/api/admin/organizations/:id/applications'
* HTTP Method: 'PATCH'
* More info: https://api.veritone.com/api/admin/core-admin-server/api-docs/#/
```javascript
app.endpoints.veritone.aiDataAdmin.organizations.applications.patch(id, body)
```
---

</details>

## Flow Step

As an alternative option to using scripts, you can make use of Flows and Flow Steps specifically created for the endpoint:
<details>
    <summary>Click here to see the Flow Steps</summary>

<br>



### Generic Flow Step

Generic flow step for full use of the entire endpoint and its services.

<h3>Inputs</h3>

<table>
    <thead>
    <tr>
        <th>Label</th>
        <th>Type</th>
        <th>Required</th>
        <th>Default</th>
        <th>Visibility</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>URL (Method)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint. <br>
            Possible values are: <br>
            <i><strong>POST,PUT,DELETE,GET,PATCH</strong></i>
        </td>
    </tr>
    <tr>
        <td>URL (Path)</td>
        <td>choice</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            The url to which this endpoint will send the request. This is the exact service to which the http request will be made. <br>
            Possible values are: <br>
            <i><strong>/v3/graphql/{query}/{variables}<br>/api/admin/applications<br>/api/admin/applications/{applicationId}/submit<br>/api/admin/applications/{applicationId}/approve<br>/api/admin/applications/{applicationId}/reject<br>/api/admin/applications/{applicationId}/deploy<br>/api/admin/applications/{applicationId}/disable<br>/api/admin/applications/{applicationId}/enable<br>/api/admin/external-credentials<br>/api/admin/signup/assign-vertical<br>/api/admin/login<br>/api/admin/password/request-reset<br>/api/admin/password/reset<br>/api/admin/password-token<br>/api/admin/mfa/verify/{token}<br>/api/admin/org-invite/password/reset<br>/api/admin/openid/linkUserToOid<br>/api/admin/organizations/{id}/openid-roles<br>/api/admin/organizations/{orgId}/paymentToken<br>/analytics/qlik/organization/{organizationId}/init<br>/api/admin/users/{userId}/mfa/register<br>/api/admin/users/{userId}/mfa/register/verify/{type}/{token}<br>/api/admin/users/{userId}/mfa/unregister/{type}<br>/api/admin/signup<br>/api/admin/signup/resend<br>/api/admin/signup/verify<br>/api/admin/users<br>/api/admin/users/{userId}/roles/{roleId}<br>/api/admin/users/{id}/force-password-reset<br>/api/admin/users/me/user-settings<br>/api/admin/users/me/accept-terms<br>/api/admin/users/me/accept-dev-terms<br>/api/admin/users/me/change-password<br>/api/admin/users/me/set-developer-organization-fields<br>/api/admin/users/me/mfa/register<br>/api/admin/users/me/mfa/register/verify/{type}/{token}<br>/api/admin/users/me/mfa/unregister/{type}<br>/v2/project<br>/v2/project/{projectid}/tts/clip<br>/v2/project/{projectid}/sts/clip<br>/v2/tts/preview<br>/v2/project/{projectid}/tts/clip/{clipid}/convert<br>/v2/project/{projectid}/sts/clip/{clipid}/convert<br>/v2/lexicon<br>/v2/lexicon/{lexiconid}/lexeme<br>/v2/lexicon/{lexiconid}/lexeme/preview<br>/edge/v1/admin/resource/{ResourceID}/engine<br>/edge/v1/admin/resource/{ResourceID}/service<br>/edge/v1/admin/server_type/{ServerTypeID}/add<br>/edge/v1/admin/terminate<br>/edge/v1/admin/licenses/apply<br>/edge/v1/admin/auth<br>/edge/v1/admin/backlog/clear<br>/edge/v1/admin/applications/create<br>/edge/v1/admin/cores/create<br>/edge/v1/admin/organizations/create<br>/edge/v1/admin/users/permission/create<br>/edge/v1/admin/resource/create<br>/edge/v1/admin/users/role/create<br>/edge/v1/admin/server_types/create<br>/edge/v1/admin/server_types/running_engine/create<br>/edge/v1/admin/service/create<br>/edge/v1/admin/tokens/create<br>/edge/v1/admin/users/create<br>/edge/v1/admin/applications/{ApplicationID}/delete<br>/edge/v1/admin/organization/{OrganizationID}/delete<br>/edge/v1/admin/resource/{ResourceID}/delete<br>/edge/v1/admin/users/role/{RoleID}/delete<br>/edge/v1/admin/server_type/{ServerTypeID}/delete<br>/edge/v1/admin/services/{ServiceID}/delete<br>/edge/v1/admin/token/{TokenID}/delete<br>/edge/v1/admin/user/{UserID}/delete<br>/edge/v1/admin/server_type/{ServerTypeID}/desired<br>/edge/v1/admin/users/login<br>/edge/v1/admin/users/oauth2_login<br>/edge/v1/admin/users/register<br>/edge/v1/admin/resource/{ResourceID}/engine/{EngineID}/delete<br>/edge/v1/admin/server_type/{ServerTypeID}/remove<br>/edge/v1/admin/backlog/reset-alloc<br>/edge/v1/admin/users/signup/initial<br>/edge/v1/admin/core/{CoreID}/update<br>/edge/v1/admin/applications/{ApplicationID}/update<br>/edge/v1/admin/config<br>/edge/v1/admin/config/{ConfigSection}<br>/edge/v1/admin/config/{ConfigSection}/{ConfigKey}<br>/edge/v1/admin/config/{ConfigSection}/{ConfigKey}<br>/edge/v1/admin/resource/{ResourceID}/engine/update<br>/edge/v1/admin/organization/{OrganizationID}/update<br>/edge/v1/admin/users/permission/{PermissionID}/update<br>/edge/v1/admin/resource/{ResourceID}/update<br>/edge/v1/admin/resource/{ResourceID}/mapping/{ResourceMappingID}/update<br>/edge/v1/admin/resource/{ResourceID}/mapping/{ResourceMappingID}/updatestate<br>/edge/v1/admin/resource/{ResourceID}/updatestate<br>/edge/v1/admin/users/role/{RoleID}/update<br>/edge/v1/admin/server_type/{ServerTypeID}/update<br>/edge/v1/admin/server_type/{ServerTypeID}/engine/{EngineID}/update<br>/edge/v1/admin/service/{ServiceID}/update<br>/edge/v1/admin/token/{TokenID}/update<br>/edge/v1/admin/user/{UserID}/update<br>/edge/v1/admin/users/password/forgot<br>/edge/v1/admin/users/password/reset<br>/edge/v1/admin/users/password/update<br>/edge/v1/admin/build/create<br>/edge/v1/admin/engine/create<br>/edge/v1/admin/engine/category/create<br>/edge/v1/engine/{EngineID}/createjob<br>/edge/v1/admin/build/{BuildID}/delete<br>/edge/v1/admin/engine/{EngineID}/delete<br>/edge/v1/engine/instance/{EngineInstanceID}/getwork<br>/edge/v1/proc/jobs/backlog_count_by_engine<br>/edge/v1/admin/build/{BuildID}/pause<br>/edge/v1/admin/engine/{EngineID}/pause<br>/edge/v1/engine/instance/register<br>/edge/v1/admin/engine/{EngineID}/replace<br>/edge/v1/admin/build/{BuildID}/resume<br>/edge/v1/admin/engine/{EngineID}/resume<br>/edge/v1/engine/instance/{EngineInstanceID}/terminate<br>/edge/v1/admin/engine/{EngineID}/update<br>/edge/v1/admin/build/{BuildID}/update<br>/edge/v1/engine/build/{BuildID}/state<br>/edge/v1/admin/engine/category/{EngineCategoryID}/update<br>/edge/v1/engine/instance/{EngineInstanceID}/updatestatus<br>/edge/v1/engine/{EngineID}/template/{EngineTemplateName}<br>/edge/v1/flow/nrcontainer/create<br>/edge/v1/flow/delete/{ContainerID}<br>/edge/v1/flow/request/update<br>/edge/v1/flow/{HostID}/updatestatus<br>/edge/v1/host/{HostID}/drain<br>/edge/v1/host/alert<br>/edge/v1/host/launch<br>/edge/v1/host/{HostID}/pause<br>/edge/v1/host/{HostID}/engine/register<br>/edge/v1/host/register<br>/edge/v1/host/{HostID}/resume<br>/edge/v1/host/{HostID}/terminate<br>/edge/v1/host/{HostID}/updatestatus<br>/edge/v1/proc/job/{JobID}/addtask<br>/edge/v1/proc/job/{JobID}/addtaskroute<br>/edge/v1/proc/jobs/cancel<br>/edge/v1/proc/job/create<br>/edge/v1/proc/job/{JobID}/delete<br>/edge/v1/proc/scheduled_job/{ScheduledJobID}/delete<br>/edge/v1/proc/task/{TaskID}/delete<br>/edge/v1/proc/template/{TemplateID}/launch<br>/edge/v1/proc/endpoint/{Endpoint}<br>/edge/v1/proc/tasks/update_status<br>/edge/v1/proxy/{HostID}/getwork<br>/edge/v1/proxy/{HostID}/register<br>/edge/v1/proxy/{HostID}/terminate<br>/edge/v1/proxy/{HostID}/update<br>/edge/v1/security/getstorageserverpublickeyset<br>/edge/v1/service/instance/create<br>/edge/v1/service/instance/{ServiceInstanceID}/delete<br>/api/admin/applications/{applicationId}/event-endpoint<br>/api/admin/applications/{applicationId}<br>/api/admin/external-credentials/{externalCredentialId}<br>/api/integration/{integrationId}/org/{orgId}<br>/api/admin/organizations/{id}/openid-roles/{openidRoleKey}<br>/api/admin/organizations/{id}/integration/{integrationId}<br>/api/admin/organizations/{orgId}<br>/analytics/qlik/stream/{streamName}<br>/api/admin/users/{userId}/mfa/default/{type}<br>/api/admin/users/{id}<br>/api/admin/users/me/user-settings<br>/v2/project/{projectid}<br>/v2/project/{projectid}/tts/clip/{clipid}<br>/v2/project/{projectid}/tts/clip/{clipid}/upload<br>/v2/lexicon/{lexiconid}<br>/api/admin/applications/{applicationId}/event-endpoint<br>/api/admin/applications/{applicationId}<br>/api/admin/organizations/{id}/applications<br>/api/admin/external-credentials/{externalCredentialId}<br>/api/admin/organizations/{id}/openid-roles/{openidRoleKey}<br>/api/admin/organizations/{id}/integration/{integrationId}<br>/api/admin/openid/user/{userId}/connection/{connectId}<br>/api/admin/users/{id}<br>/api/admin/users/{userId}/roles/{roleId}<br>/api/admin/users/me/user-settings/{key}<br>/v2/project/{projectid}<br>/v2/project/{projectid}/tts/clip/{clipid}<br>/v2/project/{projectid}/sts/clip/{clipid}<br>/v2/lexicon/{lexiconid}<br>/v2/lexicon/{lexiconid}/lexeme/{lexemeid}<br>/edge/v1/admin/licenses/{LicenseID}/delete<br>/edge/v1/admin/server_type/{ServerTypeID}/delete<br>/edge/v1/admin/server_type/{ServerTypeID}/engine/{EngineID}/delete<br>/edge/v1/engine/{EngineID}/template/{EngineTemplateName}<br>/api/admin/applications<br>/api/admin/applications/{applicationId}<br>/api/admin/applications/{applicationId}<br>/api/admin/external-credentials<br>/api/admin/external-credentials/{externalCredentialId}<br>/api/admin/external-credentials/{externalCredentialId}<br>/api/admin/current-user<br>/api/admin/users/me/applications<br>/api/admin/users/me/refresh-user-cache<br>/api/admin/signup/assign-vertical/{cloneId}/clone-progress<br>/api/admin/signup/initial/{token}<br>/api/admin/token/{token}<br>/api/admin/token/{token}/logout<br>/api/admin/token/{token}/refresh<br>/api/admin/token/{token}/extend<br>/api/admin/mfa/{type}/token<br>/api/admin/bearer/{token}<br>/api/admin/users/{id}/reload<br>/api/admin/organization/{orgId}/integration/{integrationId}<br>/api/admin/groups/application/organization<br>/api/admin/organizations/{orgId}<br>/api/admin/organizations/{orgId}/roles<br>/api/admin/organizations/{id}/integrations<br>/api/admin/organizations/{orgId}/paymentToken<br>/api/admin/organizations/{orgId}/invoices<br>/api/admin/integration/{integrationId}<br>/api/admin/permissions<br>/api/admin/permissions/{permId}<br>/api/admin/permissions/{permId}<br>/analytics/qlik/app<br>/analytics/qlik/app/{appId}<br>/analytics/qlik/app/{appId}<br>/analytics/qlik/app/{appId}/sheet<br>/api/admin/tokens/organizations/{organizationId}/tokens/all<br>/api/admin/users/{userId}/mfa<br>/api/admin/roles<br>/api/admin/roles/{roleId}<br>/api/admin/roles/{roleId}<br>/api/admin/roles/{roleId}/permissions<br>/api/admin/signup/verify/{userName}<br>/api/admin/users<br>/api/admin/users/{id}<br>/api/admin/users/{id}<br>/api/admin/users/{id}/permissions<br>/api/admin/users/{id}/scim_connect_ids<br>/api/admin/users/me/user-settings<br>/api/admin/users/me/mfa<br>/api/admin/username/{email}/available<br>/v2/project/{projectid}<br>/v2/projects<br>/v2/project/{projectid}/clips<br>/v2/project/{projectid}/tts/clip/{clipid}<br>/v2/project/{projectid}/sts/clip/{clipid}<br>/v2/sts/voices?lang<br>/v2/lexicon<br>/v2/lexicon/{lexicon_id}<br>/v2/lexicon/{lexicon_id}<br>/v2/tts/voice?lang<br>/v2/tts/voice/{voice_id}<br>/v2/tts/voice/{voice_id}<br>/v2/tts/voice/{voice_id}/versions<br>/edge/v1/admin/application/{ApplicationID}/detail<br>/edge/v1/admin/core/{CoreID}/detail<br>/edge/v1/admin/cores<br>/edge/v1/admin/engine/{EngineID}/config/{ConfigSection}/{ConfigKey}<br>/edge/v1/admin/organization/{OrganizationID}/detail<br>/edge/v1/admin/organization/{OrganizationID}/tokens<br>/edge/v1/admin/organizations<br>/edge/v1/admin/users/permission/{PermissionID}/detail<br>/edge/v1/admin/users/role/{RoleID}/detail<br>/edge/v1/admin/service/instances<br>/edge/v1/admin/service/{ServiceID}/instances<br>/edge/v1/admin/service/{ServiceID}/instances<br>/edge/v1/admin/status<br>/edge/v1/admin/token/{TokenID}/detail<br>/edge/v1/admin/token/{TokenID}/permissions<br>/edge/v1/admin/tokens<br>/edge/v1/admin/user/{UserID}/detail<br>/edge/v1/admin/user/{UserID}/permissions<br>/edge/v1/admin/user/{UserID}/tokens<br>/edge/v1/admin/users<br>/edge/v1/admin/users/permissions<br>/edge/v1/admin/users/roles<br>/edge/v1/admin/applications<br>/edge/v1/admin/backlog/summary<br>/edge/v1/admin/config<br>/edge/v1/admin/config/{ConfigSection}<br>/edge/v1/admin/config/{ConfigSection}/{ConfigKey}<br>/edge/v1/admin/config/{ConfigSection}/{ConfigKey}<br>/edge/v1/admin/resource/{ResourceID}/engines<br>/edge/v1/admin/licenses/{LicenseID}/detail<br>/edge/v1/admin/licenses<br>/edge/v1/admin/resource/{ResourceID}/mappings<br>/edge/v1/admin/resource/{ResourceID}<br>/edge/v1/admin/resource/{ResourceID}/mapping/{ResourceMappingID}/detail<br>/edge/v1/admin/resources<br>/edge/v1/admin/engine/{EngineID}/resources<br>/edge/v1/admin/host/{HostID}/resources<br>/edge/v1/admin/service/{ServiceID}/resources<br>/edge/v1/admin/server_type/{ServerTypeID}/detail<br>/edge/v1/admin/server_types/running_engines<br>/edge/v1/admin/server_type/{ServerTypeID}/engine/{EngineID}/detail<br>/edge/v1/admin/server_types<br>/edge/v1/admin/service/{ServiceID}/detail<br>/edge/v1/admin/services<br>/edge/v1/admin/build/{BuildID}/detail<br>/edge/v1/admin/engine/{EngineID}/builds<br>/edge/v1/engine/builds<br>/edge/v1/engine/builds/downloads<br>/edge/v1/admin/engine/categories<br>/edge/v1/admin/engine/category/{EngineCategoryID}/detail<br>/edge/v1/engine/container_count<br>/edge/v1/admin/engine/{EngineID}/detail<br>/edge/v1/engine/instance/{EngineInstanceID}/detail<br>/edge/v1/engine/instances<br>/edge/v1/engine/{EngineID}/instances<br>/edge/v1/engine/{EngineID}/instances<br>/edge/v1/engine/instance/{EngineInstanceID}/logs<br>/edge/v1/engine/instance/{EngineInstanceID}/status<br>/edge/v1/engine/instance/{EngineInstanceID}/workdetail<br>/edge/v1/engine/{EngineID}/launch/{LaunchID}/detail<br>/edge/v1/engine/{EngineID}/launches<br>/edge/v1/admin/engine/stats<br>/edge/v1/engine/{EngineID}/template/{EngineTemplateName}<br>/edge/v1/admin/engines<br>/edge/v1/engine/instance/{EngineInstanceID}/resources<br>/edge/v1/flowaction/requests/clean<br>/edge/v1/automate/containers<br>/edge/v1/hosts/cpu_usage<br>/edge/v1/host/{HostID}/detail<br>/edge/v1/engine/memory_usage<br>/edge/v1/host/{HostID}/status<br>/edge/v1/hosts<br>/edge/v1/hosts/counts<br>/edge/v1/hosts/counts_by_type<br>/edge/v1/host/{HostID}/launch<br>/edge/v1/proc/tasks/error/engine_error_time_ranges<br>/edge/v1/proc/job/{JobID}/detail<br>/edge/v1/proc/job/{JobID}/download/{JobOutputName}<br>/edge/v1/proc/job/{JobID}/output/{JobOutputName}<br>/edge/v1/proc/job/{JobID}/outputs<br>/edge/v1/proc/job/{JobID}/performance<br>/edge/v1/proc/job/{JobID}/status<br>/edge/v1/proc/job/{JobID}/workrequests<br>/edge/v1/proc/jobs<br>/edge/v1/proc/jobs/stats/organization<br>/edge/v1/proc/jobs/performance<br>/edge/v1/proc/jobs/stats<br>/edge/v1/proc/jobs/stats/time_ranges<br>/edge/v1/proc/scheduled_jobs/rate_pending_time_ranges<br>/edge/v1/proc/scheduled_job/{ScheduledJobID}/detail<br>/edge/v1/proc/scheduled_jobs<br>/edge/v1/proc/tasks/error/server_error_counts<br>/edge/v1/proc/task/{TaskID}/detail<br>/edge/v1/proc/task/{TaskID}/download/{TaskOutputName}<br>/edge/v1/proc/task/{TaskID}/logs<br>/edge/v1/proc/task/{TaskID}/output/{TaskOutputName}<br>/edge/v1/proc/task/{TaskID}/outputs<br>/edge/v1/proc/task/reports<br>/edge/v1/proc/task/reports/{ReportMonth}<br>/edge/v1/proc/task/reports/{ReportMonth}<br>/edge/v1/proc/tasks/sync_backlog<br>/edge/v1/proc/task/{TaskID}/timings<br>/edge/v1/proc/tasks<br>/edge/v1/proc/tasks/error/count_type_by_engine<br>/edge/v1/proc/tasks/errors<br>/edge/v1/proc/tasks/instances/by_category_host<br>/edge/v1/proc/tasks/stats<br>/edge/v1/proc/tasks/stats/categories<br>/edge/v1/proc/tasks/stats/engines<br>/edge/v1/proc/tasks/stats/organizations<br>/edge/v1/proc/tasks/stats/time_ranges<br>/edge/v1/proc/scheduled_jobs/total_pending_time_ranges<br>/edge/v1/proc/workrequest/{WorkRequestID}/detail<br>/edge/v1/proc/task/listreports<br>/edge/v1/proc/job/{JobID}/recheck_status<br>/edge/v1/proc/tasks/stats/export<br>/edge/v1/service/instance/{ServiceInstanceID}/resources<br>/api/admin/organizations/{id}/applications<br></strong></i>
        </td>
    </tr>
    <tr>
        <td>Headers</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom http header for the request.
        </td>
    </tr>
    <tr>
        <td>Query Params</td>
        <td>keyValue</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query params for the http call.
        </td>
    </tr>
    <tr>
        <td>Body</td>
        <td>json</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            A payload of data can be sent to the server in the body of the request.
        </td>
    </tr>
    <tr>
        <td>Event</td>
        <td>dropDown</td>
        <td>no</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used to define event after the call. <br>
            Possible values are: <br>
            File Downloaded, Callback
        </td>
    </tr>
    <tr>
        <td>Callback data</td>
        <td>textarea</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is an object you can send that you will get back when the function is processed.
        </td>
    </tr>
    <tr>
        <td>Callbacks</td>
        <td>Script</td>
        <td>no</td>
        <td> - </td>
        <td> Event is Callback </td>
        <td>
            This is a map where you can listen for different function
        </td>
    </tr>
    <tr>
        <td>Override Settings</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td>Always</td>
        <td></td>
    </tr>
    <tr>
        <td>Follow Redirect</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Indicates that the resource has to be downloaded into a file instead of returning it in the response.</td>
    </tr>
    <tr>
        <td>Download</td>
        <td>boolean</td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>If true the method won't return until the file has been downloaded, and it will return all the information of the file.</td>
    </tr>
    <tr>
        <td>File name</td>
        <td>text</td>
        <td>no</td>
        <td></td>
        <td> overrideSettings </td>
        <td>If provided, the file will be stored with this name. If empty the file name will be calculated from the URL.</td>
    </tr>
    <tr>
        <td>Full response</td>
        <td> boolean </td>
        <td>no</td>
        <td> false </td>
        <td> overrideSettings </td>
        <td>Include extended information about response</td>
    </tr>
    <tr>
        <td>Connection Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 5000 </td>
        <td> overrideSettings </td>
        <td>Connect timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    <tr>
        <td>Read Timeout</td>
        <td> number </td>
        <td>no</td>
        <td> 60000 </td>
        <td> overrideSettings </td>
        <td>Read timeout interval, in milliseconds (0 = infinity).</td>
    </tr>
    </tbody>
</table>

<h3>Outputs</h3>

<table>
    <thead>
    <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Description</th>
    </tr>
    </thead>
    <tbody>
    <tr>
        <td>response</td>
        <td>object</td>
        <td>
            Object resulting from the response to the endpoint call.
        </td>
    </tr>
    </tbody>
</table>


</details>

For more information about how shortcuts or flow steps works, and how they are generated, take a look at the [slingr-helpgen tool](https://github.com/slingr-stack/slingr-helpgen).

## Additional Flow Step


<details>
    <summary>Click here to see the Customs Flow Steps</summary>

<br>



### Custom Flow Steps Name

Description of Custom Flow Steps

*MANUALLY ADD THE DOCUMENTATION OF THESE FLOW STEPS HERE...*


</details>

## Additional Helpers
*MANUALLY ADD THE DOCUMENTATION OF THESE HELPERS HERE...*