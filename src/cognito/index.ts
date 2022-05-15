import { CognitoIdentityProviderClient } from '@aws-sdk/client-cognito-identity-provider';

export const cognitoClient = new CognitoIdentityProviderClient({ region: 'us-east-1' });

export * from './adminGetUser';
export * from './getUser';
export * from './index';
export * from './initiateAuth';
export * from './passwordChange';
export * from './passwordForgot';
export * from './passwordForgotConfirm';
export * from './refershToken';
export * from './setMFAPreferences';
export * from './setUserAttributes';
export * from './signIn';
export * from './signInChallenge';
export * from './signOut';
export * from './signUp';
export * from './signUpConfirm';
export * from './signUpResend';
export * from './softwareTokenAssociate';
export * from './softwareTokenVerify';