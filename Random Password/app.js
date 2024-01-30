const slider = document.querySelector("input");
const value = document.querySelector(".value");
value.textContent = slider.value;

slider.oninput = function() {
    value.textContent = this.value;
}

let mybutton = document.getElementById("mybutton");
let mypass = document.getElementById("mypass");
let myvalue = document.getElementById("myvalue");
let myrange = document.getElementById("myrange");
let chars = "abcdefghijklxmnoprszuvxzqw123456789ABCDEFGHIKLXMNOPRSZQWE*?/$#";


mybutton.onclick = function() {
    let passwordLength = myrange.value;
    let i = 0;
    let passw = "";
    while (i < passwordLength) {
        passw += chars.charAt(Math.floor(Math.random() * chars.length + 1));
        i++;
    }
    mypass.textContent = passw;

    
    
    
}
