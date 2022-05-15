import { AuthFlowType, InitiateAuthResponse, UserContextDataType } from '@aws-sdk/client-cognito-identity-provider';
export declare type AuthParameters = {
    [key: string]: string;
};
export declare const initiateAuth: (clientId: string, authFlow: AuthFlowType, authParameters: AuthParameters, userContextData?: UserContextDataType | undefined) => Promise<InitiateAuthResponse>;
