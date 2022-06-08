const createAccount = document.querySelector('.btn')
const pw = document.querySelector('#password')
const rpw = document.querySelector('#confirm_pw')

createAccount.addEventListener('click', (e) => {
    if(pw.value.toString() !== rpw.value.toString()){
        console.log("PASSWORD DOEST NOT MATCH!")
    }
    e.preventDefault()
})