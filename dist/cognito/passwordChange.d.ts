import { ChangePasswordCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
export declare const passwordChange: (accessToken: string, previousPassword: string, password: string) => Promise<ChangePasswordCommandOutput>;
