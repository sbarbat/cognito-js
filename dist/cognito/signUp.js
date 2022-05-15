"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUp = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const signUp = (clientId, username, password, userAttributes, userContextData) => {
    const command = new client_cognito_identity_provider_1.SignUpCommand({
        ClientId: clientId,
        Username: username,
        Password: password,
        UserAttributes: userAttributes,
        UserContextData: userContextData,
    });
    return _1.cognitoClient.send(command);
};
exports.signUp = signUp;
