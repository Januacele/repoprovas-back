import { IUserData } from "../../src/types/userTypes";
import { prisma } from "../../src/config/database";
import bcrypt from "bcrypt";
import {faker} from "@faker-js/faker";

async function createUser() {
    const password = faker.internet.password();
    const newUser = {
      email: faker.internet.email(),
      password,
      confirmPassword: password
    }
    return newUser;
  }

function loginUser(user: IUserData) {
    return prisma.user.create({
        data: {
            ...user,
            password: bcrypt.hashSync(user.password, 10)
        },
    });
}

const userDataFactory = {
    createUser,
    loginUser
}

export default userDataFactory;