import { ForgotPasswordCommandOutput, UserContextDataType } from "@aws-sdk/client-cognito-identity-provider";
export declare const passwordForgot: (clientId: string, username: string, hash?: string | undefined, userContextData?: UserContextDataType | undefined) => Promise<ForgotPasswordCommandOutput>;
