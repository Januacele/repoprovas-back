import { IcreateData } from "../types/testsTypes";
import categoryRepository from "../repositories/categoryRepository";
import disciplineRepository from "../repositories/disciplineRepository";
import teacherRepository from "../repositories/teacherRepository";
import { notFoundError } from "../utils/errorUtils";

async function insertTest(createTest: IcreateData){
    const { name, pdfUrl, categoryId, teacherId, disciplineId } = createTest;
    
    const existingCategory = await categoryRepository.getCategoryById(categoryId);
    if(!existingCategory) throw notFoundError("Category doesn't exist");

    const existingDiscipline = await disciplineRepository.getDiscplineById(disciplineId);
    if(!existingDiscipline) throw notFoundError("Discipline doesn't exist");

    const existTeacher = await teacherRepository.getTeacherById(teacherId);
    if(!existTeacher) notFoundError("Teacher doesn't exist");


}