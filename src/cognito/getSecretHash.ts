import CryptoJS from 'crypto-js';
import Base64 from 'crypto-js/enc-base64';

export const getSecretHash = (
  clientId: string,
  clientSecret: string,
  username: string
) => {
  const hmac = CryptoJS.HmacSHA256(username + clientId, clientSecret);

  return Base64.stringify(hmac);
};
