import { AttributeType, AuthFlowType, ChallengeNameType, SMSMfaSettingsType, SoftwareTokenMfaSettingsType, UserContextDataType } from "@aws-sdk/client-cognito-identity-provider";
import { AuthParameters } from "./cognito";
interface CognitoJSOptions {
    USER_POOL_ID: string;
    COGNITO_CLIENT_ID: string;
    COGNITO_CLIENT_SECRET?: string;
}
declare class CognitoJS {
    userPoolId: string;
    cognitoClientId: string;
    cognitoClientSecret?: string;
    constructor({ USER_POOL_ID, COGNITO_CLIENT_ID, COGNITO_CLIENT_SECRET, }: CognitoJSOptions);
    private generateSecretHash;
    associateSoftwareToken(accessToken: string, session: string): Promise<import("@aws-sdk/client-cognito-identity-provider").AssociateSoftwareTokenCommandOutput>;
    adminGetUser(username: string): Promise<import("@aws-sdk/client-cognito-identity-provider").AdminGetUserCommandOutput>;
    getUser(accessToken: string): Promise<import("@aws-sdk/client-cognito-identity-provider").GetUserCommandOutput>;
    initiateAuth(authFlow: AuthFlowType, authParameters: AuthParameters, userContextData?: UserContextDataType): Promise<import("@aws-sdk/client-cognito-identity-provider").InitiateAuthResponse>;
    passwordChange(accessToken: string, previousPassword: string, password: string): Promise<import("@aws-sdk/client-cognito-identity-provider").ChangePasswordCommandOutput>;
    passwordForgot(username: string, userContextData?: UserContextDataType): Promise<import("@aws-sdk/client-cognito-identity-provider").ForgotPasswordCommandOutput>;
    passwordForgotConfirm(username: string, password: string, code: string, userContextData?: UserContextDataType): Promise<import("@aws-sdk/client-cognito-identity-provider").ConfirmForgotPasswordCommandOutput>;
    refreshToken(rToken: string, deviceKey: string): Promise<import("./cognito").Token>;
    setMFAPreferences(accessToken: string, smsMfaSettings: SMSMfaSettingsType, softwareTokenMfaSettings: SoftwareTokenMfaSettingsType): Promise<import("@aws-sdk/client-cognito-identity-provider").SetUserMFAPreferenceCommandOutput>;
    setUserAttributes(accessToken: string, userAttributes: AttributeType[]): Promise<import("@aws-sdk/client-cognito-identity-provider").UpdateUserAttributesCommandOutput>;
    signIn(username: string, password: string): Promise<import("./cognito").Token | import("./cognito").NewChallenge>;
    signInChallenge(challengeName: ChallengeNameType, challengeResponse: {
        [key: string]: string;
    }, session: string, userContextData?: UserContextDataType): Promise<import("./cognito").Token | import("./cognito").NewChallenge>;
    signOut(accessToken: string): Promise<import("@aws-sdk/client-cognito-identity-provider").GlobalSignOutCommandOutput>;
    signUp(username: string, password: string, userAttributes?: AttributeType[], userContextData?: UserContextDataType): Promise<import("@aws-sdk/client-cognito-identity-provider").SignUpCommandOutput>;
    signUpConfirm(username: string, code: string, hash?: string, forceAliasCreation?: boolean, userContextData?: UserContextDataType): Promise<import("@aws-sdk/client-cognito-identity-provider").ConfirmSignUpCommandOutput>;
    signUpResend(username: string, hash?: string, userContextData?: UserContextDataType): Promise<import("@aws-sdk/client-cognito-identity-provider").ResendConfirmationCodeCommandOutput>;
}
export default CognitoJS;
