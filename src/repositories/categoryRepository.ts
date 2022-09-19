import { prisma } from "../config/database";


async function findCategoryByName(name: string){
    return await prisma.category.findUnique({
        where: {
            name
        }
    });  
};

async function findCategories(){
    return prisma.category.findMany();
}

const categoryRepository = {
    findCategoryByName,
    findCategories
}

export default categoryRepository;