---
title: Veritone endpoint
keywords: 
last_updated: March 13, 2023
tags: []
summary: "Detailed description of the API of the Veritone endpoint."
---

# Overview

Veritone is a leading provider of artificial intelligence (AI) technology and solutions. The company's proprietary operating system, aiWARETM, orchestrates an expanding ecosystem of machine learning models to transform audio, video and other data sources into actionable intelligence.

Some features in this endpoint are:

- Authentication
- Helpers to make GraphQL queries

To make a GraphQL query, you can do something like this:

```js
var res = app.endpoints.veritone.gql.post(`
  mutation runEngineJob {
    createJob(
      input: {
        targetId: "102014611",
        tasks: [
          {
            engineId: "8081cc99-c6c2-49b0-ab59-c5901a503508"
          },
          {
            engineId: "insert-into-index"
          },
          {
            engineId: "thumbnail-generator"
          },
          {
            engineId: "mention-generate"
          }
        ]
      }
    )
    {
      id
    }
  }
`);
```

Reference the [GraphQL API](https://docs.veritone.com/#/apis/using-graphql) for more information.

# Configuration

- You will need to create an account at Veritone
- Generate an API token as described [here](https://docs.veritone.com/#/apis/authentication)

## API Token
API token to access Veritone's services

# Quick start

GraphQL API allows you to do everything you need. You can make a GraphQL query like this:

```js
var res = app.endpoints.veritone.gql.post(`
  mutation runEngineJob {
    createJob(
      input: {
        targetId: "102014611",
        tasks: [
          {
            engineId: "8081cc99-c6c2-49b0-ab59-c5901a503508"
          },
          {
            engineId: "insert-into-index"
          },
          {
            engineId: "thumbnail-generator"
          },
          {
            engineId: "mention-generate"
          }
        ]
      }
    )
    {
      id
    }
  }
`);
```

You can find more information of the GraphQL API here:

- Using GraphQL: https://docs.veritone.com/#/apis/using-graphql
- GrpahQL basics: https://docs.veritone.com/#/apis/tutorials/graphql-basics
- GrpahQL examples: https://docs.veritone.com/#/apis/examples

# Javascript API

The Javascript API of the veritone endpoint has three pieces:

- **HTTP requests**: These allow to make regular HTTP requests.
- **Shortcuts**: These are helpers to make HTTP request to the API in a more convenient way.
- **Additional Helpers**: These helpers provide additional features that facilitate or improves the endpoint usage in SLINGR.

## HTTP requests
You can make `POST` requests to the [veritone API](API_URL_HERE) like this:
```javascript
var response = app.endpoints.veritone.post('/v3/graphql', query)
```

Please take a look at the documentation of the [HTTP endpoint](https://github.com/slingr-stack/http-endpoint#javascript-api)
for more information about generic requests.

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v3/graphql'
* HTTP Method: 'POST'
```javascript
app.endpoints.veritone.gql.post(query)
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
        <td> const </td>
        <td>no</td>
        <td> POST /v3/graphql </td>
        <td>Always</td>
        <td>
            This is the http method to be used against the endpoint.
        </td>
    </tr>
    <tr>
        <td>Query</td>
        <td>text</td>
        <td>yes</td>
        <td> - </td>
        <td>Always</td>
        <td>
            Used when you want to have a custom query for the http call to graphql API.
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



# Events

This endpoint does not have any webhooks.

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
