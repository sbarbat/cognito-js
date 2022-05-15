import {
  ForgotPasswordCommand,
  ForgotPasswordCommandOutput,
  UserContextDataType,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const passwordForgot = (
  clientId: string,
  username: string,
  hash?: string,
  userContextData?: UserContextDataType
): Promise<ForgotPasswordCommandOutput> => {
  const command = new ForgotPasswordCommand({
    ClientId: clientId,
    Username: username,
    SecretHash: hash,
    UserContextData: userContextData,
  });
  return cognitoClient.send(command);
};
