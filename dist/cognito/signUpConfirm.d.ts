import { ConfirmSignUpCommandOutput, UserContextDataType } from "@aws-sdk/client-cognito-identity-provider";
export declare const signUpConfirm: (clientId: any, username: string, code: string, hash?: string | undefined, forceAliasCreation?: boolean, userContextData?: UserContextDataType | undefined) => Promise<ConfirmSignUpCommandOutput>;
