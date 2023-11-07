import express from 'express'
import bodyParser from 'body-parser';
import {router} from './router/index'
import cors from 'cors'
import dotenv from 'dotenv'
dotenv.config()


 const app = express();
 app.use(express.json())
 app.use(cors({}))
 app.use(router)

 app.listen('3003',()=>{ console.log(`Server listening`)})
