import {prisma} from "../config/database";

async function findTermById(id: number){
    return await prisma.term.findUnique({
        where: {
            id
        }
    });
};

const termsRepository = {
    findTermById,
};

export default termsRepository;