import { Request, Response } from "express"
import { CreateService } from "./createService"

export class CreateController{
    constructor(private CreateService: CreateService){}

   async handle(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            await this.CreateService.execute(body)
            return res.sendStatus(201)
        } catch (err: any) {
            console.log("erro na criação: ", err.message)
            return res.status(500).send(err.message)
        }
    }
}
