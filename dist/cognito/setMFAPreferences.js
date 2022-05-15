"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setMFAPreferences = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const setMFAPreferences = (accessToken, smsMfaSettings, softwareTokenMfaSettings) => {
    const command = new client_cognito_identity_provider_1.SetUserMFAPreferenceCommand({
        AccessToken: accessToken,
        SMSMfaSettings: smsMfaSettings,
        SoftwareTokenMfaSettings: softwareTokenMfaSettings,
    });
    return _1.cognitoClient.send(command);
};
exports.setMFAPreferences = setMFAPreferences;
