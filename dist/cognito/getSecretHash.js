"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSecretHash = void 0;
const crypto_js_1 = __importDefault(require("crypto-js"));
const enc_base64_1 = __importDefault(require("crypto-js/enc-base64"));
const getSecretHash = (clientId, clientSecret, username) => {
    const hmac = crypto_js_1.default.HmacSHA256(username + clientId, clientSecret);
    return enc_base64_1.default.stringify(hmac);
};
exports.getSecretHash = getSecretHash;
