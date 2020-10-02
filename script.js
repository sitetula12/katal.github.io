function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}

ibg();

$(document).ready(function () {
  $(".footer__title").click(function (event) {
    $(this).toggleClass("active").next().slideToggle(300);
  });
});

(function () {
  var hint = document.createElement("div");
  hint.className = "hint";
  document.body.appendChild(hint);

  var path = document.getElementsByTagName("path");
  var i;
  for (i = 0; i < path.length; i++) {
    path[i].addEventListener("mouseenter", function () {
      hint.innerText = this.dataset.description;
      hint.style.display = "inline-block";
    });
    path[i].addEventListener("mouseleave", function () {
      hint.style.display = "none";
    });
    path[i].addEventListener("mousemove", function (e) {
      if (e.pageX + hint.offsetWidth < document.body.offsetWidth) {
        hint.style.top = e.pageY + 10 + "px";
        hint.style.left = e.pageX + 10 + "px";
      } else {
        hint.style.top = e.pageY + 10 + "px";
        hint.style.left = e.pageX - hint.offsetWidth - 10 + "px";
      }
    });
  }
})();
