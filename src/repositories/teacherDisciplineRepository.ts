import { prisma } from "../config/database";


async function getTeacherAndDiscpline(teacherId: number, disciplineId: number){
    return prisma.teachersDisciplines.findFirst({
        where: { AND : {disciplineId, teacherId} }
    });
}

const teacherDiscplineRepository = {
    getTeacherAndDiscpline
}

export default teacherDiscplineRepository;