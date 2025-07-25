import { Request, Response } from "express"
import { container } from "tsyringe"
import { UpdateAndAddService } from "./updateAndAddService"


class UpdateAndAddController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params
            const data = req.body

            const updateAndAddService = container.resolve(UpdateAndAddService)
            await updateAndAddService.execute(id, data)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new UpdateAndAddController()