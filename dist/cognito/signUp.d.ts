import { AttributeType, SignUpCommandOutput, UserContextDataType } from "@aws-sdk/client-cognito-identity-provider";
export declare const signUp: (clientId: string, username: string, password: string, userAttributes?: AttributeType[] | undefined, userContextData?: UserContextDataType | undefined) => Promise<SignUpCommandOutput>;
