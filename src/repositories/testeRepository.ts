import { prisma } from "../config/database";
import { IcreateData } from "../types/testsTypes"


async function createTeste(insertData: IcreateData){
    await prisma.test.create({
        data: insertData,
    });
}

async function findByDiscipline(disciplineId: number){
    const tests : any = await prisma.term.findMany({
        include: {
            disciplines: {
                where: {
                    id: disciplineId
                },
                select: {
                    id: true,
                    name: true,
                    term: {},
                    teacherDisciplines: {
                        select: {
                            id: true,
                            discipline: {},
                            teacher: {},
                            tests: {
                                select: {
                                    id: true,
                                    name: true,
                                    pdfUrl: true,
                                    category: {}    
                                }
                            }
                        }
                    }
                }
            }
        }
    });

    return tests;
};

const testeRepository = {
    createTeste,
    findByDiscipline
}

export default testeRepository;