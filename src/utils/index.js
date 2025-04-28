import crypto from 'node:crypto';

export const emailRegex = /^\S+@\S+\.\S+$/;

export const phoneRegex = /^\+?\d{1,4}?[-.\s]?(\(?\d{1,4}\)?)[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;

export const GetRandomString = (length) => crypto.randomBytes(length).toString('hex');
