import { GlobalSignOutCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
export declare const signOut: (accessToken: string) => Promise<GlobalSignOutCommandOutput>;
