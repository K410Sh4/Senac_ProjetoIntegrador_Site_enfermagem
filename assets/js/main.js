const framecontact = document.querySelector(".contact");
const btnclose = document.querySelector(".btnx");
const btnopen = document.querySelector(".btnon");
const showHome = document.querySelector("#ShowHome");
const showParadCard = document.querySelector("#ShowHeart");
const showEng = document.querySelector("#ShowPulms");
const showAniPe = document.querySelector("#ShowAnimal");
const body = document.body;

let btncounter = 0;
framecontact.style.display = "none";
function interagirbtn() {
    if (btncounter == 0) {
        btncounter = 1
        btnopen.style.display = "block";
        framecontact.style.display = "none";
    }
    else {
        btncounter = 0
        btnopen.style.display = "none";
        framecontact.style.display = "block";
    }
}
btnopen.addEventListener("click", interagirbtn);
btnclose.addEventListener("click", interagirbtn);



if (body.id === 'home'){
   showHome.style.background = "black";
   showHome.style.boxShadow = "2px 3px 5px white";
   showHome.style.transform = "scale(1.07)"
   showHome.style.border = "1px solid white";
}
else if (body.id === 'animais'){
   showAniPe.style.background = "black";
   showAniPe.style.boxShadow = "2px 3px 5px white";
   showAniPe.style.transform = "scale(1.07)"
   showAniPe.style.border = "1px solid white";
}
else if (body.id === 'coracao'){
   showParadCard.style.background = "black";
   showParadCard.style.boxShadow = "2px 3px 5px white";
   showParadCard.style.transform = "scale(1.07)"
   showParadCard.style.border = "1px solid white";
}
else if (body.id === 'engasgo'){
   showEng.style.background = "black";
   showEng.style.boxShadow = "2px 3px 5px white";
   showEng.style.transform = "scale(1.07)"
   showEng.style.border = "1px solid white";
}
