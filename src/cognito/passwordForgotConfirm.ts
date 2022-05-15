import { ConfirmForgotPasswordCommand, ConfirmForgotPasswordCommandOutput, UserContextDataType } from '@aws-sdk/client-cognito-identity-provider';
import { cognitoClient } from '.';

export const passwordForgotConfirm = (
  clientId: string,
  username: string,
  password: string,
  code: string,
  hash?: string,
  userContextData?: UserContextDataType
): Promise<ConfirmForgotPasswordCommandOutput> => {
  const command = new ConfirmForgotPasswordCommand({
    ClientId: clientId,
    Username: username,
    Password: password,
    ConfirmationCode: code,
    SecretHash: hash,
    UserContextData: userContextData,
  });
  return cognitoClient.send(command);
};
