import { ITestInput, IcreateData } from "../types/testsTypes";
import categoryRepository from "../repositories/categoryRepository";
import disciplineRepository from "../repositories/disciplineRepository";
import teacherRepository from "../repositories/teacherRepository";
import { notFoundError } from "../utils/errorUtils";
import teacherDiscplineRepository from "../repositories/teacherDisciplineRepository";
import testeRepository from "../repositories/testeRepository";
import termsRepository from "../repositories/termsRepository";

async function insertTest(createTest: ITestInput){
    
    const existingCategory = await categoryRepository.findCategoryByName(createTest.category);
    if(!existingCategory) throw notFoundError("Category doesn't exist");
    const categoryId = existingCategory.id;

    const existingDiscipline = await disciplineRepository.findDisciplineByName(createTest.discipline);
    if(!existingDiscipline) throw notFoundError("Discipline doesn't exist");
    const disciplineId = existingDiscipline.id;

    const existTeacher = await teacherRepository.findTeacherByName(createTest.teacher);
    if(!existTeacher) throw notFoundError("Teacher doesn't exist");
    const teacherId = existTeacher.id;

    const existTeacherDisciplines = await teacherDiscplineRepository.findTeacherAndDiscpline(teacherId, disciplineId);
    if(!existTeacherDisciplines) throw notFoundError ("Teacher doesn't teach this discipline");
    const teacherDisciplineId = existTeacherDisciplines.id;

    const insertData : IcreateData = {
        name: createTest.name,
        pdfUrl: createTest.pdfUrl,
        categoryId,
        teacherDisciplineId
    };

    await testeRepository.createTeste(insertData)
}


async function getTestsByDiscipline(disciplineName: string){
    const discipline = await disciplineRepository.findDisciplineByName(disciplineName);
    if (!discipline) throw notFoundError("Discipline doesn't exist");

    const disciplineId = discipline.id;

    const termId = discipline.termId;
    const term = await termsRepository.findTermById(termId);
    const termNumber = term?.number;

    const tests = await testeRepository.findByDiscipline(disciplineId);

    const formatedTests = tests.filter((x: { disciplines: any[]; }) => {
        return x.disciplines.length > 0 && x.disciplines.filter(y => {
            return y.teacherDisciplines.length > 0 && y.teacherDisciplines.filter((z: { tests: string | any[]; }) => {
                return z.tests.length > 0;
            });
        });
    });

    return formatedTests;

}

const testService = {
    insertTest,
    getTestsByDiscipline
}


export default testService;