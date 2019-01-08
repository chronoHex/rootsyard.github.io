function myFunction() {
    var x = document.getElementById("myTopnav");
    var b = document.getElementById("red");
    var a = document.getElementById("green");
    var q = document.getElementsByClassName("splittor");
    if (x.className === "topnav") {
      x.className += " responsive"
      b.style.display = "inherit"
      a.style.display = "inherit"
      for(m = 0; m < q.length; m++){
          q[m].style.display = "inline";
      }
    } else {
      x.className = "topnav";
      b.style.display = "none"
      a.style.display = "none"
      for(m = 0; m < q.length; m++){
        q[m].style.display = "none";
    }
    }
  }