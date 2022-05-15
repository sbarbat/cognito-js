import {
  AuthFlowType,
  InitiateAuthCommand,
  InitiateAuthResponse,
  UserContextDataType,
} from '@aws-sdk/client-cognito-identity-provider';
import { cognitoClient } from '.';

export type AuthParameters = { [key: string]: string };

export const initiateAuth = (
  clientId: string,
  authFlow: AuthFlowType,
  authParameters: AuthParameters,
  userContextData?: UserContextDataType
): Promise<InitiateAuthResponse> => {
  const command = new InitiateAuthCommand({
    ClientId: clientId,
    AuthFlow: authFlow,
    AuthParameters: authParameters,
    UserContextData: userContextData,
  });
  return cognitoClient.send(command);
};
