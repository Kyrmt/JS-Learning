let mysubmit = document.getElementById("mysubmit");
let mytext = document.getElementById("mytext");
let finalmessage = document.getElementById("finalmessage");
let nbr = Math.floor(Math.random()* 100);
let roll = document.getElementById("roll");

let chances = 3;
let counter = 0;



console.log(nbr)
roll.onclick = function(){
 
 
    
        let randomnum1 = nbr + Math.floor(Math.random()* 10 + 1);
        let randomnum2 = nbr - Math.floor(Math.random()* 10 + 1);
        finalmessage.textContent = `your number between ${randomnum1} and ${randomnum2}`




   

 
}

mysubmit.onclick = function () {

     
        if (mytext.value == nbr) {
            document.getElementById("myp1").textContent = "RIGHT NUMBER";
        
        } 
        else if(mytext.value.trim() === "") {
            document.getElementById("myp1").textContent = "PLEASE WRITE A NUMBER";

        }
        else if (isNaN(Number(mytext.value))){
            document.getElementById("myp1").textContent = "PLEASE WRITE A NUMBER";
        }
        else {
            document.getElementById("myp1").textContent = `YOU HAVE ONLY 1 CHANCES TRUE NUMBER WAS: ${nbr}`;
        }
       
            
        
    

};

