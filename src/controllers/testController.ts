import { Request, Response } from "express";
import testService from "../services/testService";


export async function insertTest(req: Request, res: Response){
    await testService.insertTest(req.body);
    res.sendStatus(201);
}