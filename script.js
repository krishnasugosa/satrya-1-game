const karakter = document.getElementById("karakter");
const musuh = document.getElementById("musuh");
const Jumpbtn = document.getElementById("jump");
const skor = document.getElementById("skor");
let TopKarakter = 100;
let skorr = 0;
setTimeout(() => {
    Jumpbtn.addEventListener("click",()=>{
        TopKarakter-=1;
        karakter.style.top = TopKarakter + "px";
        karakter.style.transition = "500ms";
        turun();
        death()
        skorr++;
        skor.textContent = skorr;
  });
}, 500);

function turun(){
    setTimeout(() => {
        karakter.style.top = 170 + "px";
        karakter.style.transition = "500ms";
    }, 500);
}

let MusuhLeft = 450
musuhHandle()
function musuhHandle(){
setInterval(() => {
    MusuhLeft -= 5
    musuh.style.left =  MusuhLeft + "px";
    if (MusuhLeft <= -15) {
        MusuhLeft = 450; 
      }
      death(); 
}, 20);
}

death()
function death(){
    const KarakterRect = karakter.getBoundingClientRect();
    const MusuhRect = musuh.getBoundingClientRect();
    if(
        KarakterRect.right > MusuhRect.left &&
        KarakterRect.left < MusuhRect.right &&
        KarakterRect.bottom > MusuhRect.top &&
        KarakterRect.top < MusuhRect.bottom
    ){
     alert("you lose " + "Your Skor " + skorr)
    }
}
