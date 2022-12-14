import { User } from '@prisma/client';

export type IUserData = Omit<User, 'id'>;

export type LoginData = {
    email: string;
    password: string;
    confirmPassword: string
}