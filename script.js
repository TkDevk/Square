    /*
function attackEvent(){
    alert("Gonorrea ne diste")
    let life=100;
    const hitSquare = document.getElementsByClassName


for(let i=0; i <= life;i++){ //Logica del foreach, for each click and other for each square
const 
       life=life-30;
       console.log(life);
       if(life==10){
       return console.log("DEad");
       }else{
        console.log("Hit")
       }
}

}
*/
const LIFE=100;
const hitDamageInput = document.getElementsByClassName('.body-Square');
for(let i; i< hitDamage.length;i++){
   //Every hit it will count 
   //i have to set variable equal to hitDamage
   const hitDamage = hitDamageInput[i];
   hitDamage.addEventListener('click', function(event){
      const hit = event.target
      hit.parentElement.remove();
   })
   
}
//I'm passing the value in every loop