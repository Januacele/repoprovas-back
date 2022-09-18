import { prisma } from "../config/database";


async function getCategoryById(id: number){
    return prisma.category.findUnique({
        where: { id },
    });
}


const categoryRepository = {
    getCategoryById
}

export default categoryRepository;