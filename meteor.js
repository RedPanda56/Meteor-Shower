$(document).ready(function()
{
    
    
var $pic = $("#pic"); 

   setInterval(function(){
       
       
var bot = $("#pic").offset().top ; 
var top1 = $("#ground").offset().top - $("#pic").height();
       
    if (bot < top1){
    $("#pic").css("top", $("#pic").offset().top + 40);
      
} else{ 
    $("#pic").css("top", 0);
    
    
} 
    
   }, 100 );
   
   
   //Moves Character
    $("#body").keydown(function(event) {
    if (event.which === 37) {
        $("#black").css("left", $("#black").offset().left - 10);
    } else if (event.which === 39) {
        $("#black").css("left", $("#black").offset().left + 10);  
    }
        else {
        return;
    }
    
        //Checks for position relative to each other
        checkCollision();
});
   
});




function checkCollision() {
 
    var blackTop = $("#black").offset().top;
    var picBottom =$("#pic").width();
    
    if(blackTop < picBottom) {
        alert ("You died. :D");
    } else{
        $("#black").show();
    }
}
