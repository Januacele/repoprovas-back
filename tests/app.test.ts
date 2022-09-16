import supertest from "supertest";
import userDataFactory from "./factories/userFactory";
import app from "../src/index";
import { prisma } from "../src/config/database"

beforeEach(async ()=> {
    await prisma.$executeRaw`TRUNCATE TABLE users`
});

const teste = supertest(app);

describe("User teste", () => {
    it("create user test", async () => {
        const user = await userDataFactory.createUser();

        const createdUser =  await teste.post("/signup").send(user);

        expect(createdUser).not.toBeNull();
    });


});

afterAll(async () => {
    await prisma.$disconnect();
});