import { ChallengeNameType, UserContextDataType } from "@aws-sdk/client-cognito-identity-provider";
import { NewChallenge, Token } from ".";
export declare const signInChallenge: (clientId: string, clientSecret: string | undefined, challengeName: ChallengeNameType, challengeResponse: {
    [key: string]: string;
}, session: string, userContextData?: UserContextDataType | undefined) => Promise<Token | NewChallenge>;
