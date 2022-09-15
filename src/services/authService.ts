import { IUserData } from "../types/userTypes";
import { conflictError,unprocessableEntity, notFoundError, unauthorizedError } from "../utils/errorUtils";
import * as authRepository from "../repositories/authRepository";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import "../setup";


async function createUser(email: string, password: string, confirmPassword: string) {
    const existisUser = await authRepository.findUserByEmail(email);
    if(existisUser) throw conflictError("User already exist");

    if (password !== confirmPassword){
        throw unprocessableEntity("password, inputs do not match");
    }

    const hashedPassword = bcrypt.hashSync(password, parseInt(process.env.SALT!));

    const newUser : IUserData = {
        email,
        password: hashedPassword
    }
    await authRepository.insertUser(newUser);
}


async function checkLogin(login:IUserData) {
    const user =  await authRepository.findUserByEmail(login.email);
    if(!user) throw unauthorizedError("Invalid data credentials");
   
    const verifyPassword = bcrypt.compareSync(login.password, user.password);
    if(!verifyPassword) throw unauthorizedError("Invalid data credentials");

    return user;
}


async function login(login: IUserData){
    const user = await checkLogin(login);
    const JWT = process.env.JWT_KEY;
    console.log(JWT);
    const token = jwt.sign({ userId: user.id }, JWT!);
    console.log(token);
    return token;
}

async function findUserById(id: number){
    const verifyUserById = await authRepository.findById(id);
    if(!verifyUserById) throw notFoundError("User not found");

    return verifyUserById;
}




const authService = {
    createUser,
    login,
    findUserById
}

export default authService;