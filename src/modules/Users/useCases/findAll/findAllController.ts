import { Request, Response } from "express";


class FindAllController{

    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const {limit, offset} = req.query
            
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new FindAllController()