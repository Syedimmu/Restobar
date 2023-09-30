


// document.addEventListener("click", myFunction);

// function myFunction() {
//   document.getElementById("demo").innerHTML = "Hello World";

var left=document.getElementById("left")
var right=document.getElementById("right")

var container=document.querySelector(".r")

left.addEventListener("click",function(){
    container.scrollBy({
        top:0,
        left:-200,
        behavior:"smooth"
    })
})
right.addEventListener("click",function(){
    container.scrollBy({
        top:0,
        left:200,
        behavior:"smooth"
    })
})

var btnscroll =document.querySelector(".striky");
 btnscroll.addEventListener("click",function(){
    window.scrollTo(
    {
        top:0,
        left :0,
        behavior:"smooth"
    }
    )   
    
})