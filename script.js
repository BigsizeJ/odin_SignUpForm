const createAccount = document.querySelector('.btn')
const pw = document.querySelector('#password')
const rpw = document.querySelector('#confirm_pw')
const number = document.querySelector('#number')

rpw.addEventListener('focus', () => {
    if(rpw.value !== pw.value){
        rpw.classList.add('invalid')
    }
    else{
        rpw.classList.remove('invalid')        
    }
})

number.addEventListener('focus', () => {
    let digit = /^[0-9]+$/
    if(number.value.length < 11 || number.value.length > 11){
        number.classList.add('invalid')
    }
    if(!digit.test(number.value)){
        number.classList.add('invalid') 
    }
    else{
        number.classList.remove('invalid')
    }
})