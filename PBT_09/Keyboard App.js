let current=0;

document.addEventListener(
"keydown",
e=>{

if(e.key==="ArrowRight"){

current++;

showImage();

}

if(e.key==="ArrowLeft"){

current--;

showImage();

}

});