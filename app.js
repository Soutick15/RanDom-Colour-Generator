
        document.querySelector("button").addEventListener("keydown",function(event){
        console.log(`${event} was pressed`);
            

})
    document.querySelector("button").addEventListener('click',function(){

        let getColour= randomColour();    
        document.querySelector("h2").innerText = getColour;
        document.querySelector("div").style.backgroundColor= getColour;



});

    function randomColour(){
   
        let red = Math.floor(Math.random()*256);
        let green = Math.floor(Math.random()*256);
        let blue = Math.floor(Math.random()*256);
        let rgb= `rgb(${red},${green},${blue})`;
        return rgb;
   
    }

  