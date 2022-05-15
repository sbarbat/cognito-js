"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = void 0;
const client_cognito_identity_provider_1 = require("@aws-sdk/client-cognito-identity-provider");
const _1 = require(".");
const signIn_1 = require("./signIn");
const refreshToken = (clientId, refreshToken, deviceKey) => __awaiter(void 0, void 0, void 0, function* () {
    const params = {
        REFRESH_TOKEN: refreshToken,
        DEVICE_KEY: deviceKey,
    };
    const { AuthenticationResult } = yield (0, _1.initiateAuth)(clientId, client_cognito_identity_provider_1.AuthFlowType.REFRESH_TOKEN, params);
    if (!AuthenticationResult)
        throw new Error("Invalid refresh token");
    return (0, signIn_1.authenticationResultToResponse)(AuthenticationResult);
});
exports.refreshToken = refreshToken;
