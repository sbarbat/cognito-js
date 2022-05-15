"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signIn = exports.authenticationResultToResponse = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const authenticationResultToResponse = (AuthenticationResult) => {
    return {
        accessToken: AuthenticationResult.AccessToken,
        refreshToken: AuthenticationResult.RefreshToken,
        idToken: AuthenticationResult.IdToken,
        tokenType: AuthenticationResult.TokenType,
        expiresIn: AuthenticationResult.ExpiresIn,
        newDeviceMetadata: AuthenticationResult.NewDeviceMetadata,
    };
};
exports.authenticationResultToResponse = authenticationResultToResponse;
const signIn = (clientId, username, password, hash) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        USERNAME: username,
        PASSWORD: password,
    };
    if (hash)
        params["SECRET_HASH"] = hash;
    const { AuthenticationResult, ChallengeName, ChallengeParameters, Session } = yield (0, _1.initiateAuth)(clientId, client_cognito_identity_provider_1.AuthFlowType.USER_PASSWORD_AUTH, params);
    // This result is only returned if the caller doesn't need to pass another challenge
    if (AuthenticationResult) {
        return (0, exports.authenticationResultToResponse)(AuthenticationResult);
    }
    return {
        nextChallengeName: ChallengeName,
        nextChallengeParameters: ChallengeParameters,
        session: Session,
    };
});
exports.signIn = signIn;
