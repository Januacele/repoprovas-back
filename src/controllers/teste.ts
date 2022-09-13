import { Request, Response } from "express";


export async function teste(req: Request, res: Response){
    console.log("cheguei aqui")
   res.status(201).send("Hello Dev Wolrd");
}


