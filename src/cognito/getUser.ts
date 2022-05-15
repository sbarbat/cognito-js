import {
  GetUserCommand,
  GetUserCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const getUser = (accessToken: string): Promise<GetUserCommandOutput> => {
  const command = new GetUserCommand({
    AccessToken: accessToken,
  });
  return cognitoClient.send(command);
};
