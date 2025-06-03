import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken"
import "dotenv/config"
import { container } from "tsyringe";
import { FindByIdService } from "modules/Users/useCases/findById/findByIdService";

interface ItokenPayLoader extends JwtPayload{
    id: string
}

class AuthMiddleware{

    execute(req: Request, res: Response, next: NextFunction): void{
        const { authorization } = req.headers

        if(!authorization) throw new Error("invalid token")
        
        const secret = process.env.SECRET as string
        const parts = authorization?.split(" ")
        if(!parts.length) throw new Error("invalid token")
        if(parts.length!==2) throw new Error("invalid token")

        const [schema, token] = parts
        if(!/^Bearer$/i.test(schema)) throw new Error("invalid token")
        
        jwt.verify(token, secret, async (error, decoded)=>{
            if(error) throw new Error("invalid token")
            if(!decoded) throw new Error("invalid token")

            const {id} = decoded as ItokenPayLoader

            try {
                const findByIdUserService = container.resolve(FindByIdService)
                const user = await findByIdUserService.execute(id)
                if(!user) throw new Error("invalid token")

                res.locals.user = user

                return next()
            } catch (err: any) {
                return res.status(500).send(err.message)
            }
        })
    }
}

export default new AuthMiddleware()