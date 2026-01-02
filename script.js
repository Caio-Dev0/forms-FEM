const btnSubmit = document.querySelector(".btn-submit")
const msgSuccess = document.querySelector('.msg-success')
const errorCheckbox = document.querySelector('.error-checkbox')
const errorMessage = document.querySelector(".error-message")
const invalidEmail = document.querySelector(".email-invalid")
const errorRadio = document.querySelector(".error-radio")
const errorEmail = document.querySelector(".error-email")
const errorLname = document.querySelector(".error-lname")
const errorFname = document.querySelector(".error-fname")
const inputFname = document.querySelector("#fname")
const inputLname = document.querySelector("#lname")
const inputEmail = document.querySelector("#email")
const btnRados = document.querySelectorAll("input[type='radio']")
const textArea = document.querySelector("#msg-area")
const checkbox = document.querySelector("#checkbox-cosent")

btnSubmit.addEventListener("click", function(){
    validaFname()
    validaLname()
    validaEmail()
    validaFormatacaoEmail()
    validaRadios()
    validaRadios()
    validaTextArea()
    validaTextArea()
    validaCheckbox()
})

const validaFname = () => inputFname.value === '' ? errorFname.style.display = "block" : errorFname.style.display = "none"
const validaLname = () => inputLname.value === '' ? errorLname.style.display = "block" : errorLname.style.display = "none"
const validaEmail = () => inputEmail.value === '' ? errorEmail.style.display = "block" : errorEmail.style.display = "none"
const validaFormatacaoEmail = () => inputEmail.value.includes("@gmail") === false ? invalidEmail.style.display = "block" : invalidEmail.style.display = "none"
const validaRadios = () =>  btnRados[0].checked === false && btnRados[1].checked === false ? errorRadio.style.display = "block" : errorRadio.style.display = "none" 
const validaTextArea = () =>  textArea.value === '' ? errorMessage.style.display = "block" : errorMessage.style.display = "none" 
const validaCheckbox = () =>  checkbox.checked === false ? errorCheckbox.style.display = "block" :  errorCheckbox.style.display = "none" 