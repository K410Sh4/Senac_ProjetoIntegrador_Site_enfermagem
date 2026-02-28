const framecontact = document.querySelector(".contact");
const btnclose = document.querySelector(".btnx");
const btnopen = document.querySelector(".btnon");
let btncounter = 0;


function interagirbtn() {
    if (btncounter == 0) {
        btncounter = btncounter + 1
    }
    else {
       btncounter = btncounter - 1
    }
}
if (btncounter == 0) {
    btnopen.style.display = "block";
    framecontact.style.display = "none";
}
else {
    btnopen.style.display = "none";
    framecontact.style.display = "block";
}
btnopen.addEventListener("click",interagirbtn);
btnclose.addEventListener("click",interagirbtn);

