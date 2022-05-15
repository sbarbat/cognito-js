import {
  ResendConfirmationCodeCommand,
  ResendConfirmationCodeCommandOutput,
  UserContextDataType,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const signUpResend = (
  clientId: string,
  username: string,
  hash?: string,
  userContextData?: UserContextDataType
): Promise<ResendConfirmationCodeCommandOutput> => {
  const command = new ResendConfirmationCodeCommand({
    ClientId: clientId,
    Username: username,
    SecretHash: hash,
    UserContextData: userContextData,
  });
  return cognitoClient.send(command);
};
