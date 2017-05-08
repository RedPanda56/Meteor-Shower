var score = 0;

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
   checkCollision();
   scorePoint();
   
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


function checkCollision() {
    
    var blackTop = $("#black").offset().top;
    var blackRight = $("#black").offset().left + $("#black").width();
    var blackLeft = $("#black").offset().left;
    
    var picBottom = $("#pic").offset().top + $("#pic").height();
    var picRight = $("#pic").offset().left + $("#pic").width();
    var picLeft = $("#pic").offset().left;
    
    console.log(blackTop);
    console.log(picBottom);
    
    if(blackTop < picBottom && picLeft < blackRight && picRight > blackLeft) {
        score = 0;
    } 
};









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


function scorePoint() {
    
    
    var paddle = $("#black").offset().top + $("#black").width();
    var botPic = $("#pic").offset().top + $("#pic").height();
    var blackTop = $("#black").offset().top + $("#black").height();
    if ( blackTop <= botPic){
        score += 1;
        console.log(score);
        $("#score").text("Meteors Avoided: " + score);
    }  
};