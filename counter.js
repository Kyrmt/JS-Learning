let count = 0;
const myH1 = document.getElementById("myH1");

document.getElementById("inc").onclick = function(){
    count++;
    myH1.textContent = count;
    checkAge();
}

document.getElementById("dec").onclick = function(){
    count--;
    myH1.textContent = count;
    checkAge();
}

document.getElementById("zero").onclick = function(){
    count = 0;
    myH1.textContent = count;
    checkAge();
}

function checkAge() {
    if (count === 20) {
        window.alert("It's your age, sensei!");
    }
}
