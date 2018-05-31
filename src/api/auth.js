import { baseAxios } from '@/utils/axios';

export const authSmsverifyPost = form => baseAxios.post('/auth/smsverify',form);

export const authEmailverifyPost = form => baseAxios.post('/auth/emailverify',form);

export const authLoginPost = form => baseAxios.post('/auth/login',form);

export const authRegisterPost = form => baseAxios.post('/auth/register',form);

export const authResetpasswordPost = form => baseAxios.post('/auth/resetpassword',form);
