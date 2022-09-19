import { prisma } from "../config/database";


async function findTeacherAndDiscpline(teacherId: number, disciplineId: number){
    return prisma.teachersDisciplines.findFirst({
        where: {
            teacherId,
            disciplineId
        }
    });
}

const teacherDiscplineRepository = {
    findTeacherAndDiscpline
}

export default teacherDiscplineRepository;