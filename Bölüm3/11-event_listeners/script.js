const mesaj = document.getElementById("mesaj");
const button = document.querySelector("button");
const buttons = document.getElementById("buttons");


function mesajGonder(){
    console.log(mesaj.value);
    mesaj.value="";
}

function mesajGoster2(){
    console.log("mesaj 2");
}


button.addEventListener("click", mesajGonder);
button.addEventListener("click", mesajGoster2);


for(let i=1; i<= 5; i++){
    let button = document.createElement("button");
    button.id = "btn" + i;
    button.innerText ="button" + i;
    button.addEventListener("click", mesajGonder);

    buttons.appendChild(button);
}