function menuFunction() {
    var x = document.getElementById("navbar");
    var y = document.getElementById("bars");
    if (x.classList.contains("navbar__nav_visible")) {
      x.classList.remove("navbar__nav_visible");
      x.classList.add("navbar__nav_hidden");
    } else {
      x.classList.add("navbar__nav_visible");
      x.classList.remove("navbar__nav_hidden");
    }
    if (y.classList.contains("fa-bars")) {
        y.classList.remove("fa-bars");
        y.classList.add("fa-xmark");
      } else {
        y.classList.add("fa-bars");
        y.classList.remove("fa-xmark");
      }
  }