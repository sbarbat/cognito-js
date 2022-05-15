import { AuthFlowType } from "@aws-sdk/client-cognito-identity-provider";
import { initiateAuth } from ".";

export interface Token {
  accessToken: string;
  refreshToken: string;
  idToken: string;
  tokenType: string;
  expiresIn: number;
  newDeviceMetadata: any;
}

export interface NewChallenge {
  nextChallengeName?: string;
  nextChallengeParameters: any;
  session?: string;
}

export const authenticationResultToResponse = (AuthenticationResult): Token => {
  return {
    accessToken: AuthenticationResult.AccessToken,
    refreshToken: AuthenticationResult.RefreshToken,
    idToken: AuthenticationResult.IdToken,
    tokenType: AuthenticationResult.TokenType,
    expiresIn: AuthenticationResult.ExpiresIn,
    newDeviceMetadata: AuthenticationResult.NewDeviceMetadata,
  };
};

export const signIn = async (
  clientId: string,
  username: string,
  password: string,
  hash?: string
): Promise<Token | NewChallenge> => {
  const params = {
    USERNAME: username,
    PASSWORD: password,
  };
  if (hash) params["SECRET_HASH"] = hash;

  const { AuthenticationResult, ChallengeName, ChallengeParameters, Session } =
    await initiateAuth(clientId, AuthFlowType.USER_PASSWORD_AUTH, params);

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
