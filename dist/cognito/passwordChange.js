"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.passwordChange = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const passwordChange = (accessToken, previousPassword, password) => {
    const command = new client_cognito_identity_provider_1.ChangePasswordCommand({
        AccessToken: accessToken,
        PreviousPassword: previousPassword,
        ProposedPassword: password,
    });
    return _1.cognitoClient.send(command);
};
exports.passwordChange = passwordChange;
