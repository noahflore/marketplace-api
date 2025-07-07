import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindByBodyService } from "./findByBodyService"


class FindByIdController{
    async handle(req: Request, res: Response): Promise<Response>{
     try {
        const body = req.body
        const findByBodyService = container.resolve(FindByBodyService)
        const order = await findByBodyService.execute(body) 

        return res.send(order)
        
     } catch (err: any) {
        return res.status(500).send(err.message)
     }   
    }
}

export default new FindByIdController()