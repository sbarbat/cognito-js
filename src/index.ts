import {
  AttributeType,
  AuthFlowType,
  ChallengeNameType,
  SMSMfaSettingsType,
  SoftwareTokenMfaSettingsType,
  UserContextDataType,
} from "@aws-sdk/client-cognito-identity-provider";
import {
  adminGetUser,
  associateSoftwareToken,
  AuthParameters,
  getUser,
  initiateAuth,
  passwordChange,
  passwordForgot,
  passwordForgotConfirm,
  refreshToken,
  setMFAPreferences,
  setUserAttributes,
  signIn,
  signInChallenge,
  signOut,
  signUp,
  signUpConfirm,
  signUpResend,
} from "./cognito";
import {} from "./cognito/adminGetUser";
import { getSecretHash } from "./cognito/getSecretHash";

interface CognitoJSOptions {
  USER_POOL_ID: string;
  COGNITO_CLIENT_ID: string;
  COGNITO_CLIENT_SECRET?: string;
}

class CognitoJS {
  userPoolId: string;
  cognitoClientId: string;
  cognitoClientSecret?: string;

  constructor({
    USER_POOL_ID,
    COGNITO_CLIENT_ID,
    COGNITO_CLIENT_SECRET,
  }: CognitoJSOptions) {
    this.userPoolId = USER_POOL_ID;
    this.cognitoClientId = COGNITO_CLIENT_ID;
    this.cognitoClientSecret = COGNITO_CLIENT_SECRET;
    return this;
  }

  private generateSecretHash(username: string): string | undefined {
    return this.cognitoClientSecret
      ? getSecretHash(this.cognitoClientId, this.cognitoClientSecret, username)
      : undefined;
  }

  associateSoftwareToken(accessToken: string, session: string) {
    return associateSoftwareToken(accessToken, session);
  }

  adminGetUser(username: string) {
    return adminGetUser(this.userPoolId, username);
  }
  getUser(accessToken: string) {
    return getUser(accessToken);
  }

  initiateAuth(
    authFlow: AuthFlowType,
    authParameters: AuthParameters,
    userContextData?: UserContextDataType
  ) {
    return initiateAuth(
      this.cognitoClientId,
      authFlow,
      authParameters,
      userContextData
    );
  }

  passwordChange(
    accessToken: string,
    previousPassword: string,
    password: string
  ) {
    return passwordChange(accessToken, previousPassword, password);
  }

  passwordForgot(username: string, userContextData?: UserContextDataType) {
    return passwordForgot(
      this.cognitoClientId,
      username,
      this.generateSecretHash(username),
      userContextData
    );
  }

  passwordForgotConfirm(
    username: string,
    password: string,
    code: string,
    userContextData?: UserContextDataType
  ) {
    return passwordForgotConfirm(
      this.cognitoClientId,
      username,
      password,
      code,
      this.generateSecretHash(username),
      userContextData
    );
  }

  refreshToken(rToken: string, deviceKey: string) {
    return refreshToken(this.cognitoClientId, rToken, deviceKey);
  }

  setMFAPreferences(
    accessToken: string,
    smsMfaSettings: SMSMfaSettingsType,
    softwareTokenMfaSettings: SoftwareTokenMfaSettingsType
  ) {
    return setMFAPreferences(
      accessToken,
      smsMfaSettings,
      softwareTokenMfaSettings
    );
  }

  setUserAttributes(accessToken: string, userAttributes: AttributeType[]) {
    return setUserAttributes(accessToken, userAttributes);
  }

  signIn(username: string, password: string) {
    return signIn(
      this.cognitoClientId,
      username,
      password,
      this.generateSecretHash(username)
    );
  }

  signInChallenge(
    challengeName: ChallengeNameType,
    challengeResponse: { [key: string]: string },
    session: string,
    userContextData?: UserContextDataType
  ) {
    return signInChallenge(
      this.cognitoClientId,
      this.cognitoClientSecret,
      challengeName,
      challengeResponse,
      session,
      userContextData
    );
  }

  signOut(accessToken: string) {
    return signOut(accessToken);
  }

  signUp(
    username: string,
    password: string,
    userAttributes?: AttributeType[],
    userContextData?: UserContextDataType
  ) {
    return signUp(
      this.cognitoClientId,
      username,
      password,
      userAttributes,
      userContextData
    );
  }

  signUpConfirm(
    username: string,
    code: string,
    hash?: string,
    forceAliasCreation: boolean = false,
    userContextData?: UserContextDataType
  ) {
    return signUpConfirm(
      this.cognitoClientId,
      username,
      code,
      hash,
      forceAliasCreation,
      userContextData
    );
  }

  signUpResend(
    username: string,
    hash?: string,
    userContextData?: UserContextDataType
  ) {
    return signUpResend(this.cognitoClientId, username, hash, userContextData);
  }
}

export default CognitoJS;
