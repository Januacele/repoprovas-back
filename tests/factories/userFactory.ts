import { IUserData } from "../../src/types/userTypes";
import { prisma } from "../../src/config/database";
import bcrypt from "bcrypt";
import {faker} from "@faker-js/faker";

async function createUser() {
    return {
      email: faker.internet.email(),
      password: faker.internet.password(),
    };
  }

function loginUser(user: IUserData) {
    return prisma.user.create({
        data: {
            ...user,
            password: bcrypt.hashSync(user.password, 10),
        },
    });
}

const userDataFactory = {
    createUser,
    loginUser
}

export default userDataFactory;