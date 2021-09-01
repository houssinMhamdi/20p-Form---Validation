const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const Password = document.getElementById('Password');
const Password2 = document.getElementById('Password2');

function showError(input,message){
    const formControle = input.parentElement;
     formControle.className = 'form-controle error';

    const small = formControle.querySelector('small');
    small.innerText = message;

}
function showSuccess(input){
    const formControle = input.parentElement;
     formControle.className = 'form-controle success';
}
function checkemail(input){
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())) {
        showSuccess(input)
    }else{
        showError(input,'Email is not valid');
    }
}


function checkLength(input,min,max){
    if (input.value.length < min) {
        showError(input,`${getFiledName(input)} most be at least ${min} charchters`);
    }else if(input.value.length > max){
        showError(input,`${getFiledName(input)} most be less than ${max} charchters`);

    }else{

        showSuccess(input);
    }
}
function checkPasswordMatch(input1,input2){
    if (input1.value !== input2.value) {
        showError(input2,"Password do not match");

    }
}


function checkInputs(inputArr){
    inputArr.forEach(function(item){
        if (item.value.trim() === '') {
            //console.log(item.id);
            showError(item,`${getFiledName(item)} is Required`);
            
        }else{
            showSuccess(item);
        }
    })
}
function getFiledName(item){
     return item.id.charAt(0).toUpperCase() + item.id.slice(1);
}

form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInputs([username , email ,Password ,Password2]);
    checkLength(username,3,20);
    checkLength(Password,6,25);
    checkLength(Password2,6,25);
    checkPasswordMatch(Password,Password2);
    checkemail(email);

})

