import { Prisma } from "@prisma/client";
import { prisma } from "../config/database";



async function createTeste(insertData: Prisma.TestUncheckedCreateInput){
    await prisma.test.create({
        data: insertData,
    });
}



const testeRepository = {
    createTeste
}

export default testeRepository;