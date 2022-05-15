"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.associateSoftwareToken = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const associateSoftwareToken = (accessToken, session) => {
    const command = new client_cognito_identity_provider_1.AssociateSoftwareTokenCommand({
        AccessToken: accessToken,
        Session: session,
    });
    return _1.cognitoClient.send(command);
};
exports.associateSoftwareToken = associateSoftwareToken;
