import { prisma } from "../config/database";


async function findCategoryByName(name: string){
    return await prisma.category.findUnique({
        where: {
            name
        }
    });  
};


const categoryRepository = {
    findCategoryByName
}

export default categoryRepository;