const mytext = document.getElementById("mytext");
const mainul = document.getElementById("mainul");

function add() {
    if(mytext.value != ""){
        const newListItem = document.createElement("li");
    const newCheckbox = document.createElement("input");
    const newhr = document.createElement("hr");
    newCheckbox.type = "checkbox";
    newCheckbox.style.marginRight = "10px"
    newCheckbox.style.width = "16px"; 
    newCheckbox.style.height = "16px"; 
    newCheckbox.style.backgroundColor = "red"
    newListItem.appendChild(newCheckbox);
    newListItem.appendChild(document.createTextNode(mytext.value));
    newListItem.appendChild(newhr);
    mainul.appendChild(newListItem);
    
    newCheckbox.addEventListener("change", function() {
        if (newCheckbox.checked) {
            setTimeout(() => {
                mainul.removeChild(newListItem);
            }, 150);
            
        }
    });
    }
    
}

