!function() {
    function e() {
        var e = $(window).scrollTop() > 64;
        e !== o && (o = e,
        o ? document.body.classList.add("fixed") : document.body.classList.remove("fixed"))
    }
    var o;
    document.addEventListener("scroll", function() {
        e()
    }),
    e();
    var t = $("#templateVideo").parent()
      , i = jhtmls.render($("#templateVideo").html());
    $("body").on("click", function(e) {
        !$(e.target).hasClass("show_video") && $(e.target).parents("section.video").length <= 0 && ($("section.video").hide(),
        t.html(""))
    }),
    $(".close_video").click(function() {
        $("section.video").hide(),
        t.html("")
    }),
    $(".show_video").click(function() {
        t.html(i({
            pause: !0
        })),
        $("section.video").show()
    }),
    $("section.video").on("click", "svg", function() {
        "undefined" != typeof sa && sa.track("playVideo", {
            source: "sensors_analytics_intro.mp4"
        }),
        setTimeout(function() {
            t.html(i({
                pause: !1
            })),
            $("section.video video").on("ended", function() {
                t.html(i({
                    pause: !0
                }))
            })
        })
    })
}();
