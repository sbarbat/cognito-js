import {
  ChangePasswordCommand,
  ChangePasswordCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const passwordChange = (
  accessToken: string,
  previousPassword: string,
  password: string
): Promise<ChangePasswordCommandOutput> => {
  const command = new ChangePasswordCommand({
    AccessToken: accessToken,
    PreviousPassword: previousPassword,
    ProposedPassword: password,
  });
  return cognitoClient.send(command);
};
