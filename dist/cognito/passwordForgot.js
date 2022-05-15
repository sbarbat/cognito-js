"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordForgot = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const passwordForgot = (clientId, username, hash, userContextData) => {
    const command = new client_cognito_identity_provider_1.ForgotPasswordCommand({
        ClientId: clientId,
        Username: username,
        SecretHash: hash,
        UserContextData: userContextData,
    });
    return _1.cognitoClient.send(command);
};
exports.passwordForgot = passwordForgot;
