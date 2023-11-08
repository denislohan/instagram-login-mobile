import {Request,Response} from 'express'
import axios from 'axios'


export const parseRecaptcha =(req:Request,resp:Response)=>{
    const {token} = req.body
axios({
    method:'post',
    url:`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.recaptcha_secret_key}&response=${token}`,
})

// axios.post('http://www.google.com/recaptcha/api/siteverify',[{secret:process.env.recaptcha_secret_key, response:token}])
.then(function (response:any) {
    console.log(response.data);
    resp.json({"score":response.data['score']})
  })
  .catch(function (error:any) {
    resp.send(error)
});

       

}