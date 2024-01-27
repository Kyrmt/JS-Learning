let myText = document.getElementById('myText');
let randomnums = document.getElementById('randomnums');
let myroll = document.getElementById('myroll');
let diceresult = document.getElementById('diceresult')
let diceimages = document.getElementById('diceimages')


myroll.onclick = function () {
    let numRolls = Number(myText.value);
    const values = [];
    const images = [];

    randomnums.textContent = "";

    if(myText.value > 150 ){
        alert("Please enter a valid number")
        return;
    }

    for (let i = 0; i < numRolls; i++) {
        const value = Math.floor(Math.random() * 6 + 1);
        values.push(value);
        images.push(`<img src = "diceroller/${value}.png">`)
    }
    
    diceresult.textContent = `Dice numbers are: ${values}`
    diceimages.innerHTML = images.join('');
}
