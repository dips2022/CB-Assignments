const red = document.querySelector(".red");
const  cyan= document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange= document.querySelector("orange");
const pink= document.querySelector(".pink");

const center = document.querySelector(".center");

// console.log(window.getComputedStyle(red).backgroundColor);
//  console.log(window.getComputedStyle(pink).backgroundColor);
//  console.log(window.getComputedStyle(violet).backgroundColor);
//  console.log(window.getComputedStyle(pink).backgroundColor);
//  console.log(window.getComputedStyle(orange).backgroundColor);


const getBGColor = (selectedElement) =>{
    return window.getComputedStyle(selectedElement).backgroundColor;

};
// console.log(getBGColor(pink));
// console.log(getBGColor(red));


// Event handler
var orangeElementColor = getBGColor(orange);
orange.addEventListener('mouseenter',()=> {
    center.style.background = orangeElementColor;
});
 var color = getBGColor(pink);
 pink.addEventListener('click',()=> {
    center.style.background = color;
 });

 const magicColorChanger = (element,color) =>{
    return  pink.addEventListener("mouseenter",()=> {
        center.style.background = color;
     });
 }

 magicColorChanger(red, getBGColor(red));