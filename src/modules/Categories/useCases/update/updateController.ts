import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateService } from "./updateService"
import { FindByIdService } from "modules/Users/useCases/findById/findByIdService"


class UpdateController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params
            const { _id } = res.locals.user
            const data = req.body

            const findByIdServiceUser = container.resolve(FindByIdService)
            const userPermission = await findByIdServiceUser.execute(_id)

            if(!userPermission.admin) throw new Error("user not permission")

            const updateService = container.resolve(UpdateService)
            await updateService.execute(id, data)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new UpdateController()