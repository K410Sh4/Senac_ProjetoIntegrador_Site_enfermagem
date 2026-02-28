const framecontact = document.querySelector(".contact");
const btnclose = document.querySelector(".btnx");
const btnopen = document.querySelector(".btnon");
let btncounter = 0;
framecontact.style.display = "none";
/--o codigo nao roda a parte de estar trocando o valor do btncounter que determina se o botao está ativo ou nao--/
function interagirbtn() {
    if (btncounter == 0) {
        btncounter = btncounter + 1
    }
    else {
       btncounter = btncounter - 1
    }
    /--aki o btn couter deveria executar conforme o seu valor o parametro dentro do seu próprio if else abaixo--/
}
if (btncounter == 0) {
    btnopen.style.display = "block";
    framecontact.style.display = "none";
}
else {
    btnopen.style.display = "none";
    framecontact.style.display = "block";
}
/--aki o btn open e btn close recebem o eventlistener de click, significando assim que apos ser clicado no sequinte elemento ele rode a funcao interagirbtn--/
btnopen.addEventListener("click",interagirbtn);
btnclose.addEventListener("click",interagirbtn);

