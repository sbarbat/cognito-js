"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initiateAuth = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const initiateAuth = (clientId, authFlow, authParameters, userContextData) => {
    const command = new client_cognito_identity_provider_1.InitiateAuthCommand({
        ClientId: clientId,
        AuthFlow: authFlow,
        AuthParameters: authParameters,
        UserContextData: userContextData,
    });
    return _1.cognitoClient.send(command);
};
exports.initiateAuth = initiateAuth;
