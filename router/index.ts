import {Router,Request,Response, NextFunction} from 'express'
import { parseRecaptcha } from '../controller/parseRecaptcha';

export const router = Router();

router.post('', (req:Request,resp:Response,next:NextFunction)=>{
    parseRecaptcha(req,resp)

})