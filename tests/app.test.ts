import supertest from "supertest";
import userDataFactory from "./factories/userFactory";
import app from "../src/index";
import { prisma } from "../src/config/database"
import exp from "constants";

beforeEach(async ()=> {
    await prisma.$executeRaw`TRUNCATE TABLE users`;
});

const teste = supertest(app);

describe("User teste", () => {
    it("create user test", async () => {
        const user = await userDataFactory.createUser();

        const createdUser =  await teste.post("/signup").send(user);

        expect(createdUser).not.toBeNull();
    });

    // it("verify if user already has an account", async () => {
    //     const user = await userDataFactory.createUser();

    //     await teste.post("/signup").send(user);
    //     const result =  await teste.post("/signup").send(user);

    //     expect(result.status).toBe(409);
    // });

    it("login user", async () => {
        const user = await userDataFactory.createUser();

        userDataFactory.loginUser(user);
        const result = await teste.post("/signin").send(user);
        const { token } = result.body;

        expect(token).not.toBeNull();
    });

});

afterAll(async () => {
    await prisma.$disconnect();
});