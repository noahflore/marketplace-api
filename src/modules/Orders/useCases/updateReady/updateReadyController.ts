import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateReadyService } from "./updateReadyService"
import { FindByIdService } from "modules/Users/useCases/findById/findByIdService";

class UpdateReadyController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params
            const data = true
            const { _id } = res.locals.user
            
            const findByIdServiceUser = container.resolve(FindByIdService)
            const userPermission = await findByIdServiceUser.execute(_id)
                        
            if(!userPermission.admin) throw new Error("user not permission")
            
            const updateService = container.resolve(UpdateReadyService)
            await updateService.execute(id, data)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new UpdateReadyController()