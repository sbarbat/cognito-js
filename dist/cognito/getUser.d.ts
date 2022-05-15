import { GetUserCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
export declare const getUser: (accessToken: string) => Promise<GetUserCommandOutput>;
