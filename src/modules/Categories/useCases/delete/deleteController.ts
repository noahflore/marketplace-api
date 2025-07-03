import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteService } from "./deleteService"
import { FindByIdService } from "modules/Users/useCases/findById/findByIdService"


class DeleteController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { _id } = res.locals.user
            const { id } = req.params
            
            const findByIdServiceUser = container.resolve(FindByIdService)
            const userPermission = await findByIdServiceUser.execute(_id)
                        
            if(!userPermission.admin) throw new Error("user not permission")
            
            const deleteService = container.resolve(DeleteService)
            await deleteService.execute(id)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new DeleteController()