import { Request, Response } from "express"
import { CreateService } from "./createService"
import { container } from "tsyringe"

class CreateController{

   async handle(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const createService = container.resolve(CreateService)
            await createService.execute(body)
            return res.sendStatus(201)
        } catch (err: any) {
            console.log("erro na criação: ", err.message)
            return res.status(500).send(err.message)
        }
    }
}

export default new CreateController