import { AttributeType, UpdateUserAttributesCommandOutput } from "@aws-sdk/client-cognito-identity-provider";
export declare const setUserAttributes: (accessToken: string, userAttributes: AttributeType[]) => Promise<UpdateUserAttributesCommandOutput>;
