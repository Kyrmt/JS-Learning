let mytext = document.getElementById("mytext");
let mysubmit = document.getElementById("mysubmit");
let ctf = document.getElementById("ctf");
let ftc = document.getElementById("ftc");
let p1 = document.getElementById("p1");
let temp;

mysubmit.onclick = function (){

    if(ctf.checked){
        temp = (mytext.value * 9/5) + 32
        p1.textContent = `${mytext.value} C is ${temp} Fahrenheit`
    }
    else if(ftc.checked){
        temp = (mytext.value - 32) * 5/9
        p1.textContent = `${mytext.value} Fahrenheit is ${temp} Celcius`
    }
    else if(mytext.value === ""){
        p1.textContent = `Please write a number in textbox`
    }
    else if (isNaN(mytext.value)){
        p1.textContent = `Please write a number in textbox`
    }
    
    else{
        p1.textContent = `Please select converter`
    }

    
}
