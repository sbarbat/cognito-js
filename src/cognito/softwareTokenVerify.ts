import {
  AssociateSoftwareTokenCommand,
  AssociateSoftwareTokenCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const softwareTokenVerify = (
  userCode: string,
  friendlyDeviceName: string,
  accessToken?: string, // OR
  session?: string
): Promise<AssociateSoftwareTokenCommandOutput> => {
  const command = new AssociateSoftwareTokenCommand({
    AccessToken: accessToken,
    Session: session,
  });
  return cognitoClient.send(command);
};
