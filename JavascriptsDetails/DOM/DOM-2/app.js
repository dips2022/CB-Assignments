 
 
   const name = document.querySelector(".name");
   const btn = document.querySelector("button");
//    btn.addEventListener("click",function(){
//     name.style.color= "green";
     
//    });

// --------------or---------------
btn.addEventListener("click",changeColor);
function changeColor(){
    name.style.color="red";
}
   