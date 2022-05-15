import { SetUserMFAPreferenceCommandOutput, SMSMfaSettingsType, SoftwareTokenMfaSettingsType } from "@aws-sdk/client-cognito-identity-provider";
export declare const setMFAPreferences: (accessToken: string, smsMfaSettings: SMSMfaSettingsType, softwareTokenMfaSettings: SoftwareTokenMfaSettingsType) => Promise<SetUserMFAPreferenceCommandOutput>;
