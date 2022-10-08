//Calculator

document.addEventListener('DOMContentLoaded', function () {
    let form = document.querySelector(".calc");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
    })
    let res_field = document.querySelector(".calc__result-field");
    let btn_num = document.querySelectorAll(".js--btn-add-res");
    let btn_reset = document.querySelector(".js--btn-reset");
    let btn_calc = document.querySelector(".js--btn-add-calc");

    for(i = 0; i< btn_num.length; i++) {
        btn_num[i].addEventListener('click', function (e) {
            e.preventDefault()
            res_field.value += this.innerHTML;
        })
    }
    btn_reset.addEventListener('click', function(e) {
        e.preventDefault()
        res_field.value = ""
    });

    btn_calc.addEventListener('click', function(e) {
        e.preventDefault()
        res_field.value = eval(res_field.value)
    })
})


//Discriminant
const disc = document.getElementById("disc");
const fsol = document.getElementById("fsol");
const ssol = document.getElementById("ssol");
// const div = document.getElementsByClassName("btn-div");



disc.addEventListener("click", () =>{
    const ax = document.getElementById("ax").value;
    const bx = document.getElementById("bx").value;
    const c = document.getElementById("c").value;
    const resultat = bx * bx - 4 * ax * c;
    document.getElementById("result").value = resultat;
})



fsol.addEventListener("click", () =>{
    const mb = document.getElementById("bx").value;
    const root = document.getElementById("result").value;
    const a = document.getElementById("ax").value;  
    const fres = (Math. sqrt(root) - mb)/(2 * a);
    document.getElementById("froot").value = Math.round(fres);
    Math.round(fres);
})

ssol.addEventListener("click", () =>{
    const mb = document.getElementById("bx").value;
    const root = document.getElementById("result").value;
    const a = document.getElementById("ax").value;
    const sres = (-Math. sqrt(root) - mb)/(2 * a);
    document.getElementById("sroot").value = Math.round(sres);
})


const offcanvasElementList = document.querySelectorAll('.offcanvas')
const offcanvasList = [...offcanvasElementList].map(offcanvasEl => new bootstrap.Offcanvas(offcanvasEl))

//Показати більше
   

function moreBtn(){
    const add_content = document.querySelector(".um-b");
    const more_btn = document.getElementById("showMore-btn");

    add_content.style.display = "flex";
    more_btn.style.display = "none"

}



