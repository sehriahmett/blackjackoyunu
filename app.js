const howEl = document.getElementById("how-el");
const statusEl = document.querySelector(".status-el");
const cardsEl = document.getElementById("cards-el");
const sumEl = document.getElementById("sum-el");
const playEl = document.getElementById("play-el");
const drawEl = document.getElementById("draw-el");
const endGameEl = document.getElementById("end-game-el");
const finishEl = document.querySelector(".finish-el");
const newGameEl = document.querySelector(".new-game-el");
let cards = [];
let sum;
let buttonWasPressed = false;

cards[0] = Math.floor(Math.random() * 11 + 1);
cards[1] = Math.floor(Math.random() * 11 + 1);


howEl.addEventListener("click", function(){
    modal.style.display = "block";
})


playEl.addEventListener("click", function(){
    if(!buttonWasPressed){
        for(let i=0; i<cards.length; i++){
            cardsEl.textContent += cards[i] + " - ";
        }
        sum = cards[0] +cards[1];
        sumEl.textContent ="Toplam: "+ sum;

        buttonWasPressed = true;
        statusEl.innerHTML = "<h3>Oyun Başladı</h3>";
		
    }else{alert("Oyun zaten başladı!")}
	
})

drawEl.addEventListener("click", () => {
    if(buttonWasPressed){
        cards.push(Math.floor(Math.random() * 11 + 1));
        cardsEl.textContent += cards[cards.length - 1] + " - ";
        sum = 0;
        for(let i=0; i<cards.length;i++){
            sum += cards[i];
        }
        sumEl.textContent = "Toplam: " + sum;
        
        if(sum>21){
            setTimeout(() => {
                alert("Oyunu kaybettin. Yeniden oynamak için tıkla..");
                window.location.reload();
            }, 3);
            
        }
    }else{alert("Önce oyunu başlatmalısın!")}
})
const finishSum = Math.floor(Math.random() * 6 + 16);

function finishGame(){
    newGameEl.innerHTML = "<button onclick= 'window.location.reload()'> Yeni Oyun </button>";

    if (sum>finishSum){
        alert("TEBRİKLER OYUNU KAZANDIN!");
    }else if (sum === finishSum){
        alert("OYUN BERABERE!");
    }else{
        alert("OYUNU KAYBETTİN!");
    }

}

endGameEl.addEventListener("click", () => {
    if(buttonWasPressed){
        //bilgisayarın elindki kartları göstersin kendi elindeki kartları göstersin 21 e yakın olan kazanan olsun
        
        finishEl.innerHTML += ("<h4> Bilgisayarın Elindeki Kartlar Toplamı: " + finishSum +"</h4>");
        setTimeout(finishGame, 800);
        
    }else{alert("Oyuna başlamadan oyunu bitiremessiniz!")}
})


// Get the modal
var modal = document.getElementById("myModal");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];


// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}