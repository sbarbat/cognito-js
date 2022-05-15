import {
  ConfirmSignUpCommand,
  ConfirmSignUpCommandOutput,
  UserContextDataType,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const signUpConfirm = (
  clientId,
  username: string,
  code: string,
  hash?: string,
  forceAliasCreation: boolean = false,
  userContextData?: UserContextDataType
): Promise<ConfirmSignUpCommandOutput> => {
  const command = new ConfirmSignUpCommand({
    ClientId: clientId,
    Username: username,
    ConfirmationCode: code,
    SecretHash: hash,
    ForceAliasCreation: forceAliasCreation,
    UserContextData: userContextData,
  });
  return cognitoClient.send(command);
};
