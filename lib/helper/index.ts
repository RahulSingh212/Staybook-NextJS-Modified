import { hash } from "bcryptjs";
import jwt_decode from "jwt-decode";


export const EMAIL_SIGNUP = "email-sign-up";
export const EMAIL_LOGIN = "email-log-in";
export const GOOGLE_SIGNUP = "google-sign-up";
export const GOOGLE_LOGIN = "google-log-in";

export async function hashToken(token: string) {
  const hashedToken = await hash(token, 12);

  return hashedToken;
}

export const extractJWTValues = async (token: any) => {
  try {
    const decodedValue = await jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vYXVyaWdhY2FyZS1kcGFwcGxpY2F0aW9uIiwiYXVkIjoiYXVyaWdhY2FyZS1kcGFwcGxpY2F0aW9uIiwiYXV0aF90aW1lIjoxNjc1ODUxNDk4LCJ1c2VyX2lkIjoickt0T0h3bDFMZFFqQ0pRRG5NVkpYbEpkMW5mMSIsInN1YiI6InJLdE9Id2wxTGRRakNKUURuTVZKWGxKZDFuZjEiLCJpYXQiOjE2NzU4NTE0OTgsImV4cCI6MTY3NTg1NTA5OCwiZW1haWwiOiJyYWh1bEBnbWFpbC5jb20iLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsicmFodWxAZ21haWwuY29tIl19LCJzaWduX2luX3Byb3ZpZGVyIjoicGFzc3dvcmQifX0.I_PMv56es0HOhKTKNATgBA1iu7paq6gMEibLOq0d4lA77NUxYTeOz7KX_oMWygOzFEFLF-l-2VqbrKNNNQY3wlTv-acitpGm0rj-9VSHK4CPIIi7AHKN3guI9elH2c56siM-zO_KuV0YFPA33TQraGdvLWyya-OTwojPSvVNGL6dBz6J3YiPpXjVqaACfzon4ThSc5UOB3NUn3-9ugBScayAJv2jToT-kr_fgjM6e4okgwOmjI6kOg52-P3Wji1YYb2VrxUhFA6KiAzJxFBVew8tKjzyaVj0rJEUfDBTTnWZsEPoCTYwEM1w0tNdAhYFvNkJg6lhbTdbwiwWVccQCg");
    console.log(decodedValue);
    return decodedValue;
  } catch (error) {
    return null;
  }
};