import { Request, Response } from "express"
import { container } from "tsyringe"
import { FindByIdService } from "./findByIdService"


class FindByIdController{
    async handle(req: Request, res: Response): Promise<Response>{
     try {
        const {id} = req.params
        const findByIdService = container.resolve(FindByIdService)
        const product = await findByIdService.execute(id) 

        return res.send(product)
        
     } catch (err: any) {
        return res.status(500).send(err.message)
     }   
    }
}

export default new FindByIdController()