const cartes = document.querySelectorAll('.carte');
const arriere = document.querySelectorAll('.arriere');

let carteRetournee = false;
let premiereCarte, secondeCarte;
let verouillage = false;

cartes.forEach(carte => {
    carte.addEventListener('click', retourneCarte) 
})




function retourneCarte(){
  
  if(verouillage === true){
   return;
  }  
  
  this.childNodes[1].classList.toggle('active'); 
  /* Permet de cibler la div double face sur laquel on click*/
  
  if(!carteRetournee){
    
      carteRetournee = true;
      premiereCarte = this;
      return;
    }

    carteRetournee = false;
    secondeCarte = this;

    console.log(premiereCarte, secondeCarte);

    correspondance();
}

function correspondance(){
  if (premiereCarte.getAttribute('data-attr') === secondeCarte.getAttribute('data-attr')){

    premiereCarte.removeEventListener('click', retourneCarte);
    secondeCarte.removeEventListener('click', retourneCarte);
  } else {
    verouillage=true;
    setTimeout(() => {

        premiereCarte.childNodes[1].classList.remove('active');
        secondeCarte.childNodes[1].classList.remove('active');

        verouillage=false;
    }, 1500)
  }

}
/* Permet de mélanger l'ordre des cartes */
function aleatoire(){
  cartes.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
  })
}
aleatoire();