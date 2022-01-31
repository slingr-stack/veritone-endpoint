---
title: Veritone endpoint
keywords: 
last_updated: January 31, 2022
tags: []
summary: "Detailed description of the API of the Veritone endpoint."
---

# Overview

Veritone is a leading provider of artificial intelligence (AI) technology and solutions. The company's proprietary operating system, aiWARETM, orchestrates an expanding ecosystem of machine learning models to transform audio, video and other data sources into actionable intelligence.

Some of the features in this endpoint are:

- Authentication
- Helpers to make GraphQL queries

To make a GraphQL query, you can do something like this:

```js
var res = app.endpoints.veritone.gql(`
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
var res = app.endpoints.veritone.gql(`
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

## Shortcuts

Instead of having to use the generic HTTP methods, you can (and should) make use of the helpers provided in the endpoint:
<details>
    <summary>Click here to see all the helpers</summary>

<br>

* API URL: '/v3/graphql'
* HTTP Method: 'POST'
* More info: https://docs.veritone.com/#/apis/tutorials/graphql-basics
```javascript
app.endpoints.veritone.gql(query)
```

</details>

# Events

This endpoint does not have any webhooks.

# About Slingr

Slingr is a low-code rapid application development platform that accelerates development, with robust architecture for integrations and executing custom workflows and automation.

[More info about Slingr](https://slingr.io)

# License

This endpoint is licensed under the Apache License 2.0. See the `LICENSE` file for more details.
