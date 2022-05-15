import {
  ChallengeNameType,
  RespondToAuthChallengeCommand,
  UserContextDataType,
} from "@aws-sdk/client-cognito-identity-provider";
import {
  authenticationResultToResponse,
  cognitoClient,
  NewChallenge,
  Token,
} from ".";
import { getSecretHash } from "./getSecretHash";

const checkParameter = (challengeResponse, parameter) => {
  if (!challengeResponse[parameter]) {
    throw new Error(`${parameter} not present in challengeResponse`);
  }
};

const addSecretHash = (clientId, clientSecret, challengeResponse) => {
  if (clientSecret) {
    challengeResponse["SECRET_HASH"] = getSecretHash(
      clientId,
      clientSecret,
      challengeResponse["USERNAME"]
    );
  }
  return challengeResponse;
};

export const signInChallenge = async (
  clientId: string,
  clientSecret: string | undefined,
  challengeName: ChallengeNameType,
  challengeResponse: { [key: string]: string },
  session: string,
  userContextData?: UserContextDataType
): Promise<Token | NewChallenge> => {
  // https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_RespondToAuthChallenge.html

  if (challengeName === ChallengeNameType.SMS_MFA) {
    checkParameter(challengeResponse, "USERNAME");
    checkParameter(challengeResponse, "SMS_MFA_CODE");
  } else if (challengeName === ChallengeNameType.PASSWORD_VERIFIER) {
    checkParameter(challengeResponse, "USERNAME");
    checkParameter(challengeResponse, "PASSWORD_CLAIM_SIGNATURE");
    checkParameter(challengeResponse, "PASSWORD_CLAIM_SECRET_BLOCK");
    checkParameter(challengeResponse, "TIMESTAMP");
  } else if (challengeName === ChallengeNameType.NEW_PASSWORD_REQUIRED) {
    checkParameter(challengeResponse, "USERNAME");
    checkParameter(challengeResponse, "NEW_PASSWORD");
    challengeResponse = addSecretHash(clientId, clientSecret, challengeResponse);
  } else if (challengeName === ChallengeNameType.SOFTWARE_TOKEN_MFA) {
    checkParameter(challengeResponse, "USERNAME");
    checkParameter(challengeResponse, "SOFTWARE_TOKEN_MFA_CODE");
  } else if (challengeName === ChallengeNameType.DEVICE_SRP_AUTH) {
    checkParameter(challengeResponse, "USERNAME");
    checkParameter(challengeResponse, "DEVICE_KEY");
    checkParameter(challengeResponse, "SRP_A");
    challengeResponse = addSecretHash(clientId, clientSecret, challengeResponse);
  } else if (challengeName === ChallengeNameType.DEVICE_PASSWORD_VERIFIER) {
    checkParameter(challengeResponse, "PASSWORD_VERIFIER");
    checkParameter(challengeResponse, "DEVICE_KEY");
  } else if (challengeName === ChallengeNameType.MFA_SETUP) {
    checkParameter(challengeResponse, "USERNAME");

    if (!session) throw new Error("You must use the session value returned by VerifySoftwareToken in the Session parameter.")
  }

  const command = new RespondToAuthChallengeCommand({
    ClientId: clientId,
    ChallengeName: challengeName,
    ChallengeResponses: challengeResponse,
    Session: session,
    UserContextData: userContextData,
  });

  const { AuthenticationResult, ChallengeName, ChallengeParameters, Session } =
    await cognitoClient.send(command);

  // This result is only returned if the caller doesn't need to pass another challenge
  if (AuthenticationResult) {
    return authenticationResultToResponse(AuthenticationResult);
  }

  return {
    nextChallengeName: ChallengeName,
    nextChallengeParameters: ChallengeParameters,
    session: Session,
  };
};
