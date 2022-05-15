import { ConfirmForgotPasswordCommandOutput, UserContextDataType } from '@aws-sdk/client-cognito-identity-provider';
export declare const passwordForgotConfirm: (clientId: string, username: string, password: string, code: string, hash?: string | undefined, userContextData?: UserContextDataType | undefined) => Promise<ConfirmForgotPasswordCommandOutput>;
