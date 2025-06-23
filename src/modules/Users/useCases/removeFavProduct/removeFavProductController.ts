import { Request, Response } from "express";
import { container } from "tsyringe";
import { RemoveFavProductService } from "./removeFavProductService";

class RemoveFavProductController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { _id } = res.locals.user
            const { productId } = req.params
            const removeFavProductService = container.resolve(RemoveFavProductService)
            await removeFavProductService.execute(_id, productId)
            return res.sendStatus(204)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new RemoveFavProductController()