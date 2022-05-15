import {
  AssociateSoftwareTokenCommand,
  AssociateSoftwareTokenCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const associateSoftwareToken = (
  accessToken: string,
  session?: string
): Promise<AssociateSoftwareTokenCommandOutput> => {
  const command = new AssociateSoftwareTokenCommand({
    AccessToken: accessToken,
    Session: session,
  });
  return cognitoClient.send(command);
};
