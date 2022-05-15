export interface Token {
    accessToken: string;
    refreshToken: string;
    idToken: string;
    tokenType: string;
    expiresIn: number;
    newDeviceMetadata: any;
}
export interface NewChallenge {
    nextChallengeName?: string;
    nextChallengeParameters: any;
    session?: string;
}
export declare const authenticationResultToResponse: (AuthenticationResult: any) => Token;
export declare const signIn: (clientId: string, username: string, password: string, hash?: string | undefined) => Promise<Token | NewChallenge>;
