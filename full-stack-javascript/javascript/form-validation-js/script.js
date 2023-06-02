const form =document.querySelector('form')
const email=document.getElementById('mail')
const error=document.querySelector('#mail + .error')

email.addEventListener('input',()=>{
    if(email.validity.valid){
        error.textContent=""
        error.className="error"
    }else {
        showError()
    }
})

form.addEventListener('submit',(event)=>{
    if(!email.validity.valid){
        showError()
        event.preventDefault()
    }
})

function showError(){
    if(email.validity.valueMissing) {
        error.textContent="email field cannot be empty"
    }else if(email.validity.typeMismatch){
        error.textContent="enter an email address"
    }else if(email.validity.tooShort){
        error.textContent=`email should be atleast ${email.minLength} characaters, you entered ${email.value.length}`
    }
    error.className="error active"
}