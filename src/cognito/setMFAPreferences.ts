import {
  SetUserMFAPreferenceCommand,
  SetUserMFAPreferenceCommandOutput,
  SMSMfaSettingsType,
  SoftwareTokenMfaSettingsType,
} from "@aws-sdk/client-cognito-identity-provider";
import { cognitoClient } from ".";

export const setMFAPreferences = (
  accessToken: string,
  smsMfaSettings: SMSMfaSettingsType,
  softwareTokenMfaSettings: SoftwareTokenMfaSettingsType
): Promise<SetUserMFAPreferenceCommandOutput> => {
  const command = new SetUserMFAPreferenceCommand({
    AccessToken: accessToken,
    SMSMfaSettings: smsMfaSettings,
    SoftwareTokenMfaSettings: softwareTokenMfaSettings,
  });
  return cognitoClient.send(command);
};
