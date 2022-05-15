"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signOut = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const signOut = (accessToken) => {
    const command = new client_cognito_identity_provider_1.GlobalSignOutCommand({
        AccessToken: accessToken,
    });
    return _1.cognitoClient.send(command);
};
exports.signOut = signOut;
