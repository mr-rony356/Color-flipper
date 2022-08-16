 
  var colors = [0, 1, 2 ,3, 4, 5, 6, 7, 8, 9, "A","B","C","D","E","F"];


  window.addEventListener('DOMContentLoaded', (event) => {
   document.body.style.backgroundColor="gray"
});
  var col = [ 0,"A",3,3,4,6,8,7,"B",1, "C","D","E","F"]
 
 const btn =document.getElementById('btn');
 const bg = document.getElementById('bg');


 btn.addEventListener('click', function(){
    let grad = "#"
    for (let i = 0; i <6; i++) {
         grad += col[getRandomCol()];
        
    }
    let  hex = "#"
    for (let i = 0; i < 6; i++) {
         hex += colors[getRandomColor()];
        
    }

    bg.innerText=hex +" " + "and" + " " + grad;
    document.body.style.backgroundImage=  'linear-gradient( '+ "400deg" +',' + hex + ' , ' + grad + ')';



   
 });
 function getRandomColor() {
    return Math.floor(Math.random()*colors.length);
    
 }
 function getRandomCol() {
    return Math.floor(Math.random()*col.length);
    
 }
;

