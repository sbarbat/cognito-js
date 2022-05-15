import {
  AttributeType,
  SignUpCommand,
  SignUpCommandOutput,
  UserContextDataType,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const signUp = (
  clientId: string,
  username: string,
  password: string,
  userAttributes?: AttributeType[],
  userContextData?: UserContextDataType
): Promise<SignUpCommandOutput> => {
  const command = new SignUpCommand({
    ClientId: clientId,
    Username: username,
    Password: password,
    UserAttributes: userAttributes,
    UserContextData: userContextData,
  });
  return cognitoClient.send(command);
};
