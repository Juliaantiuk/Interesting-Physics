//Const
const greet = document.querySelector(".greet");
const regForm = document.querySelector(".registration");
const check = document.querySelector(".log-in");



  
function showRegForm() {
    greet.style.display = "none";

    regForm.style.display = "inline";
}

function logInMyAcc(){
    greet.style.display = "none";

    check.style.display = "inline";
}

function submit(){
    // Якщо поля не заповнені
    const inputs = document.querySelectorAll(".reg-inp")
   
    if (inputs.values.length === 0){
        alert("Будь ласка, заповніть усі поля")
    }

    // Чи співпадають паролі (реєстрація)
    const password = document.querySelector(".pass");
    const confpassword = document.querySelector(".confpass");

    if (confpassword.value != password.value) {
    alert("Паролі не співпадають")
    }

}


