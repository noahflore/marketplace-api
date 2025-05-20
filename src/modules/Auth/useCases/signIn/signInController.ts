import { Request, Response } from "express";
import { container } from "tsyringe";
import { SignInService } from "./signInService";

class SignInController{
    async handle(req: Request, res: Response): Promise<Response>{
        try {
            const body = req.body
            const signInService = container.resolve(SignInService)
            const token = await signInService.execute(body)
            return res.send({token})
            
        } catch (err: any) {
            return res.status(500).send(err.message)
        }
    }
}

export default new SignInController()