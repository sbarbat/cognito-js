import { Token } from "./signIn";
export declare const refreshToken: (clientId: string, refreshToken: string, deviceKey: string) => Promise<Token>;
