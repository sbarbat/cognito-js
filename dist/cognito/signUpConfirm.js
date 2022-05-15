"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpConfirm = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const signUpConfirm = (clientId, username, code, hash, forceAliasCreation = false, userContextData) => {
    const command = new client_cognito_identity_provider_1.ConfirmSignUpCommand({
        ClientId: clientId,
        Username: username,
        ConfirmationCode: code,
        SecretHash: hash,
        ForceAliasCreation: forceAliasCreation,
        UserContextData: userContextData,
    });
    return _1.cognitoClient.send(command);
};
exports.signUpConfirm = signUpConfirm;
