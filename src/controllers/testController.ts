import { Request, Response } from "express";
import testService from "../services/testService";
import { ITestInput } from "../types/testsTypes";

export async function insertTest(req: Request, res: Response){
    const createTest: ITestInput = req.body;
    await testService.insertTest(createTest);
    res.status(201).send("Test added");
}

export async function getTestsByDiscipline(req: Request, res: Response){
    const disciplineName : string = req.params.name;

    const tests = await testService.getTestsByDiscipline(disciplineName);

    res.status(200).send(tests);
}