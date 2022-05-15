"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cognito_1 = require("./cognito");
const getSecretHash_1 = require("./cognito/getSecretHash");
class CognitoJS {
    constructor({ USER_POOL_ID, COGNITO_CLIENT_ID, COGNITO_CLIENT_SECRET, }) {
        this.userPoolId = USER_POOL_ID;
        this.cognitoClientId = COGNITO_CLIENT_ID;
        this.cognitoClientSecret = COGNITO_CLIENT_SECRET;
        return this;
    }
    generateSecretHash(username) {
        return this.cognitoClientSecret
            ? (0, getSecretHash_1.getSecretHash)(this.cognitoClientId, this.cognitoClientSecret, username)
            : undefined;
    }
    associateSoftwareToken(accessToken, session) {
        return (0, cognito_1.associateSoftwareToken)(accessToken, session);
    }
    adminGetUser(username) {
        return (0, cognito_1.adminGetUser)(this.userPoolId, username);
    }
    getUser(accessToken) {
        return (0, cognito_1.getUser)(accessToken);
    }
    initiateAuth(authFlow, authParameters, userContextData) {
        return (0, cognito_1.initiateAuth)(this.cognitoClientId, authFlow, authParameters, userContextData);
    }
    passwordChange(accessToken, previousPassword, password) {
        return (0, cognito_1.passwordChange)(accessToken, previousPassword, password);
    }
    passwordForgot(username, userContextData) {
        return (0, cognito_1.passwordForgot)(this.cognitoClientId, username, this.generateSecretHash(username), userContextData);
    }
    passwordForgotConfirm(username, password, code, userContextData) {
        return (0, cognito_1.passwordForgotConfirm)(this.cognitoClientId, username, password, code, this.generateSecretHash(username), userContextData);
    }
    refreshToken(rToken, deviceKey) {
        return (0, cognito_1.refreshToken)(this.cognitoClientId, rToken, deviceKey);
    }
    setMFAPreferences(accessToken, smsMfaSettings, softwareTokenMfaSettings) {
        return (0, cognito_1.setMFAPreferences)(accessToken, smsMfaSettings, softwareTokenMfaSettings);
    }
    setUserAttributes(accessToken, userAttributes) {
        return (0, cognito_1.setUserAttributes)(accessToken, userAttributes);
    }
    signIn(username, password) {
        return (0, cognito_1.signIn)(this.cognitoClientId, username, password, this.generateSecretHash(username));
    }
    signInChallenge(challengeName, challengeResponse, session, userContextData) {
        return (0, cognito_1.signInChallenge)(this.cognitoClientId, this.cognitoClientSecret, challengeName, challengeResponse, session, userContextData);
    }
    signOut(accessToken) {
        return (0, cognito_1.signOut)(accessToken);
    }
    signUp(username, password, userAttributes, userContextData) {
        return (0, cognito_1.signUp)(this.cognitoClientId, username, password, userAttributes, userContextData);
    }
    signUpConfirm(username, code, hash, forceAliasCreation = false, userContextData) {
        return (0, cognito_1.signUpConfirm)(this.cognitoClientId, username, code, hash, forceAliasCreation, userContextData);
    }
    signUpResend(username, hash, userContextData) {
        return (0, cognito_1.signUpResend)(this.cognitoClientId, username, hash, userContextData);
    }
}
exports.default = CognitoJS;
