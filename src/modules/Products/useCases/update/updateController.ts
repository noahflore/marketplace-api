import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateService } from "./updateService"


class UpdateController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params
            const data = req.body

            const updateService = container.resolve(UpdateService)
            await updateService.execute(id, data)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new UpdateController()