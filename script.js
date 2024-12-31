function moveRand(elm){
    elm.style.position="absolute";
    elm.style.top=Math.floor(Math.random()*90+5)+"%";
    elm.style.left=Math.floor(Math.random()*90+5)+"%";
}

const moveR=document.querySelector("#move-random");

moveR.addEventListener("mouseenter",function (e){
    moveRand(e.target);
})