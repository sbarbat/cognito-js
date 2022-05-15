import { AuthFlowType } from "@aws-sdk/client-cognito-identity-provider";
import { initiateAuth } from ".";
import { authenticationResultToResponse, Token } from "./signIn";

export const refreshToken = async (
  clientId: string,
  refreshToken: string,
  deviceKey: string
): Promise<Token> => {
  const params = {
    REFRESH_TOKEN: refreshToken,
    DEVICE_KEY: deviceKey,
  };

  const { AuthenticationResult } = await initiateAuth(
    clientId,
    AuthFlowType.REFRESH_TOKEN,
    params
  );

  if (!AuthenticationResult) throw new Error("Invalid refresh token");

  return authenticationResultToResponse(AuthenticationResult);
};
