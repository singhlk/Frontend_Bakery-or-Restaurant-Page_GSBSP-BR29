let pre = document.getElementById("pre");
let nex = document.getElementById("nex");
let i1 = document.getElementById("i1");
let i2 = document.getElementById("i2");
let i3 = document.getElementById("i3");
nex.addEventListener("click", function(){
    i1.style.background = "url(d4.JPG)";
    i1.style.backgroundPosition = "center";
    i1.style.backgroundRepeat ="no-repeat";
    i1.style.backgroundSize = "cover";
    i2.style.background = "url(d5.JPG)";
    i2.style.backgroundPosition = "center";
    i2.style.backgroundRepeat ="no-repeat";
    i2.style.backgroundSize = "cover";
    i3.style.background = "url(d6.JPG)";
    i3.style.backgroundPosition = "center";
    i3.style.backgroundRepeat ="no-repeat";
    i3.style.backgroundSize = "cover";
    // nex.style.display = "none";
    // nex.replaceWith(pre);
    nex.style.visibility = "hidden";
    pre.style.visibility = "visible";
    pre.addEventListener("click", function(){
        i1.style.background = "url(d1.JPG)";
        i1.style.backgroundPosition = "center";
        i1.style.backgroundRepeat ="no-repeat";
        i1.style.backgroundSize = "cover";
        i2.style.background = "url(d2.JPG)";
        i2.style.backgroundPosition = "center";
        i2.style.backgroundRepeat ="no-repeat";
        i2.style.backgroundSize = "cover";
        i3.style.background = "url(d3.JPG)";
        i3.style.backgroundPosition = "center";
        i3.style.backgroundRepeat ="no-repeat";
        i3.style.backgroundSize = "cover";  
        nex.style.visibility = "visible";
        pre.style.visibility = "hidden";
        
    });
});

