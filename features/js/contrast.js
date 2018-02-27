!function() {
    function e() {
        o.style.width = d.clientWidth + "px",
        n = o.getBoundingClientRect().top - document.body.getBoundingClientRect().top - c.clientHeight
    }
    function t() {
        var e = $(window).scrollTop()
          , t = e >= n;
        t !== i && (i = t,
        i ? document.body.classList.add("nav-fixed") : document.body.classList.remove("nav-fixed"))
    }
    var n, o = document.querySelector(".tbl-header table"), d = document.querySelector(".tbl-content table"), c = document.querySelector("header");
    window.addEventListener("resize", e),
    e();
    var i;
    document.addEventListener("scroll", function() {
        t()
    }),
    t()
}();
