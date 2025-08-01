import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindByBodyService } from "./findByBodyService"


class FindByBodyController{
    async handle(req: Request, res: Response): Promise<Response>{
     try {
        const body = req.body
        const findByBodyService = container.resolve(FindByBodyService)
        const cart = await findByBodyService.execute(body) 

        return res.send(cart)
        
     } catch (err: any) {
        return res.status(500).send(err.message)
     }   
    }
}

export default new FindByBodyController()