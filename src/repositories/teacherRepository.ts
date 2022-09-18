import { prisma } from "../config/database";


async function getTeacherById(id: number){
    return prisma.teacher.findUnique({
        where: { id },
    });
}

const categoryTeacher = {
    getTeacherById
}

export default categoryTeacher;