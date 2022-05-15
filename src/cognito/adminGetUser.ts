import {
    AdminGetUserCommand,
    AdminGetUserCommandOutput
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";
  
  export const adminGetUser = (userPoolId: string, username: string): Promise<AdminGetUserCommandOutput> => {
    const command = new AdminGetUserCommand({
      UserPoolId: userPoolId,
      Username: username
    });
    return cognitoClient.send(command);
  };
  