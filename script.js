let pixels = document.querySelectorAll('.pixel');
let lastick = document.querySelector('.lastick');
let chosenColor = document.querySelector('.chosen-color');

for(let pixel of pixels){
  
  pixel.onclick=function(){
    if(lastick.checked){
      pixel.style.backgroundColor = 'white';
    }else{
     pixel.style.backgroundColor = chosenColor.value; 
    }
  }
}