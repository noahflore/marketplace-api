import { Request, Response } from "express"
import { container } from "tsyringe"
import { DeleteService } from "./deleteService"


class DeleteController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { id } = req.params
            const deleteService = container.resolve(DeleteService)
            await deleteService.execute(id)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new DeleteController()