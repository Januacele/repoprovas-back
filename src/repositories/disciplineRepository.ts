import { prisma } from "../config/database";


async function findDisciplineByName(name: string){
    return prisma.discipline.findUnique({
        where: { name }
    });
}

const categoryDiscipline = {
    findDisciplineByName
}

export default categoryDiscipline;