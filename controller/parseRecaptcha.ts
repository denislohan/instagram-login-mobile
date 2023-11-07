import {Request,Response} from 'express'
import axios from 'axios'


export const parseRecaptcha =(req:Request,resp:Response)=>{

    const {token} = req.body
    console.log('token',req.params)
    console.log('token',req.body)
    console.log('token',process.env.recaptcha_secret_key)








axios({
    method:'post',
    url:`https://www.google.com/recaptcha/api/siteverify?secret=${process.env.recaptcha_secret_key}&response=${token}`,
})

// axios.post('http://www.google.com/recaptcha/api/siteverify',[{secret:process.env.recaptcha_secret_key, response:token}])
.then(function (response:any) {
    console.log(response.data);
    resp.send(response)

  })
  .catch(function (error:any) {
    resp.send(error)
});

       

}