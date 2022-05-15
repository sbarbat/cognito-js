"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const getUser = (accessToken) => {
    const command = new client_cognito_identity_provider_1.GetUserCommand({
        AccessToken: accessToken,
    });
    return _1.cognitoClient.send(command);
};
exports.getUser = getUser;
