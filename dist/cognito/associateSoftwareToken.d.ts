import { AssociateSoftwareTokenCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
export declare const associateSoftwareToken: (accessToken: string, session?: string | undefined) => Promise<AssociateSoftwareTokenCommandOutput>;
