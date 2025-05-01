import crypto from 'node:crypto';

export const emailRegex = /^\S+@\S+\.\S+$/;

export const GetRandomString = (length) => crypto.randomBytes(length).toString('hex');

export const urlRegex = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,6})(\/.*)?$/i;
