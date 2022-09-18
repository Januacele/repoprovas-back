import { prisma } from "../config/database";


async function getDiscplineById(id: number){
    return prisma.category.findUnique({
        where: { id },
    });
}

const categoryDiscipline = {
    getDiscplineById
}

export default categoryDiscipline;