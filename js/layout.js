!function() {
    function e() {
        n.style.fontSize = n.clientWidth > 1e3 ? (Math.min(1440, n.clientWidth) * t).toFixed(2) + "px" : "24px"
    }
    var t = 24 / 1440
      , n = document.documentElement;
    e(),
    window.addEventListener("resize", e)
}();
