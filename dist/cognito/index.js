"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cognitoClient = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
exports.cognitoClient = new client_cognito_identity_provider_1.CognitoIdentityProviderClient({ region: 'us-east-1' });
__exportStar(require("./adminGetUser"), exports);
__exportStar(require("./associateSoftwareToken"), exports);
__exportStar(require("./getUser"), exports);
__exportStar(require("./index"), exports);
__exportStar(require("./initiateAuth"), exports);
__exportStar(require("./passwordChange"), exports);
__exportStar(require("./passwordForgot"), exports);
__exportStar(require("./passwordForgotConfirm"), exports);
__exportStar(require("./refershToken"), exports);
__exportStar(require("./setMFAPreferences"), exports);
__exportStar(require("./setUserAttributes"), exports);
__exportStar(require("./signIn"), exports);
__exportStar(require("./signInChallenge"), exports);
__exportStar(require("./signOut"), exports);
__exportStar(require("./signUp"), exports);
__exportStar(require("./signUpConfirm"), exports);
__exportStar(require("./signUpResend"), exports);
