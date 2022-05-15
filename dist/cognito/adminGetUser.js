"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.adminGetUser = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const adminGetUser = (userPoolId, username) => {
    const command = new client_cognito_identity_provider_1.AdminGetUserCommand({
        UserPoolId: userPoolId,
        Username: username
    });
    return _1.cognitoClient.send(command);
};
exports.adminGetUser = adminGetUser;
