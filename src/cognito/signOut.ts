import {
  GlobalSignOutCommand,
  GlobalSignOutCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const signOut = (
  accessToken: string
): Promise<GlobalSignOutCommandOutput> => {
  const command = new GlobalSignOutCommand({
    AccessToken: accessToken,
  });
  return cognitoClient.send(command);
};
