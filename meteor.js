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
   
});
