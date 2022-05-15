import { AdminGetUserCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
export declare const adminGetUser: (userPoolId: string, username: string) => Promise<AdminGetUserCommandOutput>;
