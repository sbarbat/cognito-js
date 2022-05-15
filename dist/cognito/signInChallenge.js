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
exports.signInChallenge = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const getSecretHash_1 = require("./getSecretHash");
const checkParameter = (challengeResponse, parameter) => {
    if (!challengeResponse[parameter]) {
        throw new Error(`${parameter} not present in challengeResponse`);
    }
};
const addSecretHash = (clientId, clientSecret, challengeResponse) => {
    if (clientSecret) {
        challengeResponse["SECRET_HASH"] = (0, getSecretHash_1.getSecretHash)(clientId, clientSecret, challengeResponse["USERNAME"]);
    }
    return challengeResponse;
};
const signInChallenge = (clientId, clientSecret, challengeName, challengeResponse, session, userContextData) => __awaiter(void 0, void 0, void 0, function* () {
    // https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html
    if (challengeName === client_cognito_identity_provider_1.ChallengeNameType.SMS_MFA) {
        checkParameter(challengeResponse, "USERNAME");
        checkParameter(challengeResponse, "SMS_MFA_CODE");
    }
    else if (challengeName === client_cognito_identity_provider_1.ChallengeNameType.PASSWORD_VERIFIER) {
        checkParameter(challengeResponse, "USERNAME");
        checkParameter(challengeResponse, "PASSWORD_CLAIM_SIGNATURE");
        checkParameter(challengeResponse, "PASSWORD_CLAIM_SECRET_BLOCK");
        checkParameter(challengeResponse, "TIMESTAMP");
    }
    else if (challengeName === client_cognito_identity_provider_1.ChallengeNameType.NEW_PASSWORD_REQUIRED) {
        checkParameter(challengeResponse, "USERNAME");
        checkParameter(challengeResponse, "NEW_PASSWORD");
        challengeResponse = addSecretHash(clientId, clientSecret, challengeResponse);
    }
    else if (challengeName === client_cognito_identity_provider_1.ChallengeNameType.SOFTWARE_TOKEN_MFA) {
        checkParameter(challengeResponse, "USERNAME");
        checkParameter(challengeResponse, "SOFTWARE_TOKEN_MFA_CODE");
    }
    else if (challengeName === client_cognito_identity_provider_1.ChallengeNameType.DEVICE_SRP_AUTH) {
        checkParameter(challengeResponse, "USERNAME");
        checkParameter(challengeResponse, "DEVICE_KEY");
        checkParameter(challengeResponse, "SRP_A");
        challengeResponse = addSecretHash(clientId, clientSecret, challengeResponse);
    }
    else if (challengeName === client_cognito_identity_provider_1.ChallengeNameType.DEVICE_PASSWORD_VERIFIER) {
        checkParameter(challengeResponse, "PASSWORD_VERIFIER");
        checkParameter(challengeResponse, "DEVICE_KEY");
    }
    else if (challengeName === client_cognito_identity_provider_1.ChallengeNameType.MFA_SETUP) {
        checkParameter(challengeResponse, "USERNAME");
        if (!session)
            throw new Error("You must use the session value returned by VerifySoftwareToken in the Session parameter.");
    }
    const command = new client_cognito_identity_provider_1.RespondToAuthChallengeCommand({
        ClientId: clientId,
        ChallengeName: challengeName,
        ChallengeResponses: challengeResponse,
        Session: session,
        UserContextData: userContextData,
    });
    const { AuthenticationResult, ChallengeName, ChallengeParameters, Session } = yield _1.cognitoClient.send(command);
    // This result is only returned if the caller doesn't need to pass another challenge
    if (AuthenticationResult) {
        return (0, _1.authenticationResultToResponse)(AuthenticationResult);
    }
    return {
        nextChallengeName: ChallengeName,
        nextChallengeParameters: ChallengeParameters,
        session: Session,
    };
});
exports.signInChallenge = signInChallenge;
