$(document).ready(function()
{
    
var $pic = $("#pic"); 

   setInterval(function(){
       
var rando = Math.random() * $("#body").width();
var bot = $("#pic").offset().top ; 
var top1 = $("#ground").offset().top - $("#pic").height();
       
    if (bot < top1){
    $("#pic").css("top", $("#pic").offset().top + 40);
}   else{ 
    $("#pic").css("left", rando);
    $("#pic").css("top", 0);
}
   
///checkCollision();
    
   }, 100 );
   
   //Moves Character
    $("#body").keydown(function(event) {
        
        dontMove();
        
    if (event.which === 37) {
        $("#black").css("left", $("#black").offset().left - 20);
    } else if (event.which === 39) {
        $("#black").css("left", $("#black").offset().left + 20);  
    }
        else {
        return;
    }
        });
    
});
    
/**function checkCollision() {
    
    var blackTop = $("#black").offset().top;
    var picBottom = $("#pic").offset().top + $("#pic").height();
    var blackBottom = blackTop + $("#black").width();
    var picTop = $("#pic").offset().top;
    var blackRight = blackLeft + $("#black").width();
    var picLeft = $("#pic").offset().left;
    var blackLeft = $("#black").offset().left;
    var picRight = picLeft + $("#pic").width();
    
    if(blackRight > picLeft && blackLeft < picRight && blackTop < picBottom && blackBottom > picTop) {
        alert ("You died. :D");
    } 
    else {
        $("#black").show();
    }
};

**/



function dontMove() {
    
    var barRight = $("#black").offset().left;
    var barLeft = $("#black").offset().left + $("#black").width();
    var pageRight = $("#body").offset().left + $("#body").width();
    var pageLeft = $("#body").offset().left;
    
 
    if (barRight < pageLeft) {
        $("#black").css("left", $("#black").offset().left + 20);
    }  
    
    else if (barLeft > pageRight) {
        $("#black").css("left", $("#black").offset().left - 20);
    }
};