import { ResendConfirmationCodeCommandOutput, UserContextDataType } from "@aws-sdk/client-cognito-identity-provider";
export declare const signUpResend: (clientId: string, username: string, hash?: string | undefined, userContextData?: UserContextDataType | undefined) => Promise<ResendConfirmationCodeCommandOutput>;
