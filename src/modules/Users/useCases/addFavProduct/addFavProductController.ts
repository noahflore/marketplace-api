import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddFavProductService } from "./addFavProductService";

class AddFavProductController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const { _id } = res.locals.user
            const { productId } = req.params
            const addFavProductService = container.resolve(AddFavProductService)
            await addFavProductService.execute(_id, productId)
            return res.sendStatus(201)
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new AddFavProductController()