"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setUserAttributes = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const setUserAttributes = (accessToken, userAttributes) => {
    const command = new client_cognito_identity_provider_1.UpdateUserAttributesCommand({
        AccessToken: accessToken,
        UserAttributes: userAttributes,
    });
    return _1.cognitoClient.send(command);
};
exports.setUserAttributes = setUserAttributes;
