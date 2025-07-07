import { Request, Response } from "express"
import { container } from "tsyringe"
import { CreateService } from "./createService"
import { FindByIdService } from "modules/Users/useCases/findById/findByIdService"


class CreateController{

   async handle(req: Request, res: Response): Promise<Response> {
        try {
            const body = req.body
            const { _id } = res.locals.user
            
            const findByIdServiceUser = container.resolve(FindByIdService)
            const userPermission = await findByIdServiceUser.execute(_id)
                        
            if(!userPermission.admin) throw new Error("user not permission")
            
            const createService = container.resolve(CreateService)
            await createService.execute(body)
            return res.sendStatus(201)
        } catch (err: any) {
            console.log("error in created: ", err.message)
            return res.status(500).send(err.message)
        }
    }
}

export default new CreateController