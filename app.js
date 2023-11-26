
var makeRandColor = function() {
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);
    return `rgb(${r},${g},${b})`
}



// var buttons = document.querySelectorAll("button");
// var h1s = document.querySelectorAll("h1");

// for(let button of buttons){
//     button.addEventListener("click",function(){
//         button.style.backgroundColor = makeRandColor();
//         button.style.color = makeRandColor();
//     })
// }


// for(let h1 of h1s){
//     h1.addEventListener("click",function(){
//         h1.style.backgroundColor = makeRandColor();
//         h1.style.color = makeRandColor();
        
//     })
// }


///////////////////////// or


var buttons = document.querySelectorAll("button");
for(let button of buttons){
    button.addEventListener("click",colorize)
}


var h1s = document.querySelectorAll("h1");

for(let h1 of h1s){
    h1.addEventListener("click", colorize)
}



function colorize(){
    this.style.backgroundColor = makeRandColor()
    this.style.color = makeRandColor()
}





