import { prisma } from "../config/database";
import { IcreateData } from "../types/testsTypes"


async function createTeste(insertData: IcreateData){
    await prisma.test.create({
        data: insertData,
    });
}



const testeRepository = {
    createTeste
}

export default testeRepository;