import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateAndRemoveService } from "./updateAndRemoveService"


class UpdateAndRemoveController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params
            const { _id } = req.body

            const updateAndRemoveService = container.resolve(UpdateAndRemoveService)
            await updateAndRemoveService.execute(id, _id)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new UpdateAndRemoveController()