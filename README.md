# Cognito JS

A JS Wrapper for `client-cognito-identity` AWS-SDK V3

## Installation

```bash
$ npm install cognito-js
```

> Typescripts devs: all types are included in the package :smile:

## Usage

```javascript
import CognitoJS from "cognito-js";

const cognito = new CognitoJS({
  USER_POOL_ID: "your_user_pool_id",
  COGNITO_CLIENT_ID: "your_client_id",
  COGNITO_CLIENT_SECRET: "your_client_secret",
});

cognito
  .signIn("my_username", "my_password")
  .then((response) => {
    // do something with the response
  })
  .catch((error) => {
    // do something with the error
  });
```
