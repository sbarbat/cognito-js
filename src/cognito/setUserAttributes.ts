import {
  AttributeType,
  UpdateUserAttributesCommand,
  UpdateUserAttributesCommandOutput,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const setUserAttributes = (
  accessToken: string,
  userAttributes: AttributeType[]
): Promise<UpdateUserAttributesCommandOutput> => {
  const command = new UpdateUserAttributesCommand({
    AccessToken: accessToken,
    UserAttributes: userAttributes,
  });
  return cognitoClient.send(command);
};
