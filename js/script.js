//Element
let lampOffElm = document.getElementById ('lamp_off');
let buttonMakeOn = document.getElementById ('button-make-on');
let lampOnElm = document.getElementById('lamp-on');

//Elementlistner
buttonMakeOn.addEventListener("click",function(){
   if(lampOnElm.classList.contains("hidden")){
    lampOnElm.classList.remove("hidden")
    buttonMakeOn.innerHTML= "spegni"
    lampOffElm.classList.add("hidden")
   
}else{
    buttonMakeOn.innerHTML= "accendi"
    lampOffElm.classList.remove("hidden")
    lampOnElm.classList.add("hidden")
    
}

});