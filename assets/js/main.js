const framecontact = document.querySelector(".contact");
const btnclose = document.querySelector(".btnx");
const btnopen = document.querySelector(".btnon");
const showHome = document.querySelector("#ShowHome");
const showParadCard = document.querySelector("#ShowHeart");
const showEng = document.querySelector("#ShowPulms");
const showAniPe = document.querySelector("#ShowAnimal");
const img1 = document.querySelector(".engasgo");
const img2 = document.querySelector(".animal");
const img3 = document.querySelector(".coracao");
imgs=[img1,img2,img3]
const body = document.body;

let btncounter = 0;
let carcounter = 0;



if (body.id === 'home') {
   showHome.style.background = "rgba(0, 0, 0, 0.3)";
   showHome.style.boxShadow = "2px 3px 5px white";
   showHome.style.transform = "scale(1.07)";
   showHome.style.border = "1px solid white";
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

   img1.style.width = "0vw"
   img2.style.width = "0vw"
   img3.style.width = "0vw"
   img1.style.transition = "300ms"
   img2.style.transition = "300ms"
   img3.style.transition = "300ms"
   if (carcounter == 0) {
      img1.style.width = "100%"
   }
   if (carcounter == 1) {
      img2.style.width = "100%"
   }
   if (carcounter == 2) {
      img3.style.width = "100%"

   }
   function atualizarCarrossel() {
      imgs.forEach((img, i) => {
         img.style.width = (i === carcounter) ? "100%" : "0vw";
      });
   }
   atualizarCarrossel();

   setInterval(() => {
      carcounter = (carcounter + 1) % imgs.length;
      atualizarCarrossel();
   }, 2000);
}
else if (body.id === 'animais') {
   showAniPe.style.background = "rgba(0, 0, 0, 0.3)";
   showAniPe.style.boxShadow = "2px 3px 5px white";
   showAniPe.style.transform = "scale(1.07)";
   showAniPe.style.border = "1px solid white";
}
else if (body.id === 'coracao') {
   showParadCard.style.background = "rgba(0, 0, 0, 0.3)";
   showParadCard.style.boxShadow = "2px 3px 5px white";
   showParadCard.style.transform = "scale(1.07)";
   showParadCard.style.border = "1px solid white";
}
else if (body.id === 'engasgo') {
   showEng.style.background = "rgba(0, 0, 0, 0.3)";
   showEng.style.boxShadow = "2px 3px 5px white";
   showEng.style.transform = "scale(1.07)";
   showEng.style.border = "1px solid white";
}
