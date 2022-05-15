"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpResend = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const signUpResend = (clientId, username, hash, userContextData) => {
    const command = new client_cognito_identity_provider_1.ResendConfirmationCodeCommand({
        ClientId: clientId,
        Username: username,
        SecretHash: hash,
        UserContextData: userContextData,
    });
    return _1.cognitoClient.send(command);
};
exports.signUpResend = signUpResend;
