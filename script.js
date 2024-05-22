var clutter = "";

for(var i = 1 ; i <= 168 ; i++){
    clutter += `<div class="bubble"> ${Math.floor(Math.random()*10)}</div>`;
}


document.querySelector("#pbtm").innerHTML = clutter;
