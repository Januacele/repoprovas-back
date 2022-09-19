import supertest from "supertest";
import userDataFactory from "./factories/userFactory";
import app from "../src/index";
import { prisma } from "../src/config/database"
import { faker } from "@faker-js/faker";
import { createNewTest } from "./factories/testsFactory";


beforeEach(async ()=> {
    await prisma.$executeRaw`TRUNCATE TABLE users`;
});

const teste = supertest(app);

describe("User teste", () => {
    it("given a valid email and password it should return 201", async () => {
        const user = await userDataFactory.createUser();

        const result =  await teste.post("/signup").send(user);

        expect(result.status).toEqual(201);
    });

    it("given an empty email and valid password it should return 422", async () => {
        const user = await userDataFactory.createUser();
        user.email = "";

        const result =  await teste.post("/signup").send(user);

        expect(result.status).toEqual(422);
    });

    it("given a valid email and empty passwords it should return 422", async () => {
        const user = await userDataFactory.createUser();
        user.password = "";

        const result =  await teste.post("/signup").send(user);

        expect(result.status).toEqual(422);
    });

    it("given a registered email and password it should return 409", async () => {
        const body = {
            email: "teste@teste.com",
            password: "123",
            confirmPassword: "123"
        };
        
        await teste.post("/signup").send(body);
        const result = await teste.post("/signup").send(body);

        expect(result.status).toEqual(409);
    });

    it("given a valid email and mismatch passwords it should return 404", async() => {
        const user = await userDataFactory.createUser();

        user.confirmPassword = faker.internet.password();

        const result = await teste.post("signup").send(user);

        expect(result.status).toEqual(404);
    });

    it("login user", async () => {
        const user = await userDataFactory.createUser();

        userDataFactory.loginUser(user);
        const result = await teste.post("/signin").send(user);
        const { token } = result.body;

        expect(token).not.toBeNull();
    });

});

describe("POST /test", () => {
    // it("given valid token and valid test data it should return 201", async () => {
    //     const bodySignup = await userDataFactory.createUser();
    //     await teste.post("/signup").send(bodySignup);

    //     const bodySignin = {
    //         email: bodySignup.email,
    //         password: bodySignup.password
    //     };
    //     const resultToken = await teste.post("/signin").send(bodySignin);
    //     const { token } = resultToken.body;
    //     // const formatedToken = `Bearer ${token}`;

    //     const body = await createNewTest();
    //     const result = await teste.post("/tests").set('Authorization', token).send(body);

    //     expect(result.status).toEqual(201);
    // });

    it("given invalid token and valid test data it should return 401", async () => {
        const random = faker.random.alphaNumeric();
        const formatedToken = `Bearer ${random}`;

        const body = await createNewTest();
        const result = await teste.post("/tests").set('Authorization', formatedToken).send(body);

        const status = result.status;
        expect(status).toEqual(401);
    });

    it("given valid token and invalid test name it should return 401", async () => {
        const bodySignup = await userDataFactory.createUser();
        await teste.post("/signup").send(bodySignup);

        const bodySignin = {
            email: bodySignup.email,
            password: bodySignup.password
        };
        const resultToken = await teste.post("/signin").send(bodySignin);
        const token = resultToken.text;
        const formatedToken = `Bearer ${token}`;

        let body = await createNewTest();
        body.name = "";

        const result = await teste.post("/tests").set('Authorization', formatedToken).send(body);

        const status = result.status;
        expect(status).toEqual(401);
    });

    it("given valid token and invalid pdf url for test it should return 401", async () => {
        const bodySignup = await userDataFactory.createUser();
        await teste.post("/signup").send(bodySignup);

        const bodySignin = {
            email: bodySignup.email,
            password: bodySignup.password
        };
        const resultToken = await teste.post("/signin").send(bodySignin);
        const token = resultToken.text;
        const formatedToken = `Bearer ${token}`;

        let body = await createNewTest();
        body.pdfUrl = "";

        const result = await teste.post("/tests").set('Authorization', formatedToken).send(body);

        const status = result.status;
        expect(status).toEqual(401);
    });

    it("given valid token and invalid test category it should return 401", async () => {
        const bodySignup = await userDataFactory.createUser();
        await teste.post("signup").send(bodySignup);

        const bodySignin = {
            email: bodySignup.email,
            password: bodySignup.password
        };
        const resultToken = await teste.post("/signin").send(bodySignin);
        const token = resultToken.text;
        const formatedToken = `Bearer ${token}`;

        let body = await createNewTest();
        body.category = "";

        const result = await teste.post("/tests").set('Authorization', formatedToken).send(body);

        const status = result.status;
        expect(status).toEqual(401);
    });

    it("given valid token and invalid test discipline it should return 401", async () => {
        const bodySignup = await userDataFactory.createUser();
        await teste.post("signup").send(bodySignup);

        const bodySignin = {
            email: bodySignup.email,
            password: bodySignup.password
        };
        const resultToken = await teste.post("/signin").send(bodySignin);
        const token = resultToken.text;
        const formatedToken = `Bearer ${token}`;

        let body = await createNewTest();
        body.discipline = "";

        const result = await teste.post("/tests").set('Authorization', formatedToken).send(body);

        const status = result.status;
        expect(status).toEqual(401);
    });

    it("given valid token and invalid test teacher it should return 401", async () => {
        const bodySignup = await userDataFactory.createUser();
        await teste.post("signup").send(bodySignup);

        const bodySignin = {
            email: bodySignup.email,
            password: bodySignup.password
        };
        const resultToken = await teste.post("/signin").send(bodySignin);
        const token = resultToken.text;
        const formatedToken = `Bearer ${token}`;

        let body = await createNewTest();
        body.teacher = "";

        const result = await teste.post("/tests").set('Authorization', formatedToken).send(body);

        const status = result.status;
        expect(status).toEqual(401);
    });


});

afterAll(async () => {
    await prisma.$disconnect();
});