import { prisma } from "../config/database";


async function findTeacherByName(name: string){
    return prisma.teacher.findUnique({
        where: {
            name
        }
    });
}

const categoryTeacher = {
    findTeacherByName
}

export default categoryTeacher;