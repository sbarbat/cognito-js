"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordForgotConfirm = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const passwordForgotConfirm = (clientId, username, password, code, hash, userContextData) => {
    const command = new client_cognito_identity_provider_1.ConfirmForgotPasswordCommand({
        ClientId: clientId,
        Username: username,
        Password: password,
        ConfirmationCode: code,
        SecretHash: hash,
        UserContextData: userContextData,
    });
    return _1.cognitoClient.send(command);
};
exports.passwordForgotConfirm = passwordForgotConfirm;
