var slideIndex = 0;
var slideIndeks = 0;
var slideCounter = 0;
var slideCycle = 0;
var slideCyclist = 0;

cycle();
function cycle() {
    var i;
    var y = document.getElementsByClassName("mySlides");
    var x = document.getElementsByClassName("secondSet");
    var z = document.getElementsByClassName("skatePark");
    var g = document.getElementsByClassName("forest");
    var h = document.getElementsByClassName("friends");

    for (i = 0; i < y.length; i++) {
        y[i].style.display = "none"; 
    }

    for (q = 0; q < x.length; q++){
        x[q].style.display = "none";
    }
    for (p = 0; p < z.length; p++){
        z[p].style.display = "none";
    }
    for (v = 0; v < g.length; v++){
        g[v].style.display = "none";
    }

    for (w = 0; w < h.length; w++){
        h[w].style.display = "none";
    }

    slideIndex++;
    slideIndeks++;
    slideCounter++;
    slideCycle++;
    slideCyclist++;

    if (slideIndex > y.length) {slideIndex = 1} 
    if (slideIndeks > x.length) {slideIndeks = 1}
    if (slideCounter > z.length) {slideCounter = 1}
    if (slideCycle > g.length) {slideCycle = 1}
    if (slideCyclist > h.length) {slideCyclist = 1}

    y[slideIndex-1].style.display = "block"; 
    x[slideIndeks-1].style.display = "block";
    z[slideCounter-1].style.display = "block";
    g[slideCycle-1].style.display = "block";
    h[slideCyclist-1].style.display = "block";

    setTimeout(cycle, 5000); 
    // Change image every 2 seconds
}