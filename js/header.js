$(function() {
    function e() {
        var e = $(window).scrollTop() > 64;
        e !== t && (t = e,
        t ? $("body").addClass("fixed") : $("body").removeClass("fixed"))
    }
    var t;
    if ($(document).on("scroll", function() {
        e()
    }),
    e(),
    $("header .btnToggle").click(function() {
        $("body").hasClass("header-menu-active") ? $("body").removeClass("header-menu-active") : $("body").addClass("header-menu-active")
    }),
    /MicroMessenger/i.test(navigator.userAgent)) {
        var o = document.querySelector("footer .mp");
        o && (o.href = "https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI5MjM3OTA0MA==&scene=110#wechat_redirect")
    }
}),
$(function() {
    var e;
    $(".btnLogout").click(function() {
        $.post("/api/passport/user/logout", function(e) {
            200 === e.status && $(".btnLogout").attr({
                title: ""
            }).hide()
        }, "json")
    });
    var t = {};
    try {
        t.site_url = sa.store._sessionState.session_page_url || "",
        t.from_url = sa.store._state.props.$utm_source || sa.store._state.props._latest_ch || "",
        t.utm_campaign = sa.store._state.props.$utm_campaign || "",
        t.utm_medium = sa.store._state.props.$utm_medium || "",
        t.utm_term = sa.store._state.props.$utm_term || "",
        t.utm_content = sa.store._state.props.$utm_content || ""
    } catch (o) {
        t.site_url = ""
    }
    try {
        t.distinct_id = sa.store._state.distinct_id,
        t.referrerUrl = sa.store._state.props.$latest_referrer,
        t.referrHostUrl = sa.store._state.props.$latest_referrer_host
    } catch (o) {
        t.distinct_id = "Unknown",
        t.referrerUrl = "Unknown",
        t.referrHostUrl = "Unknown"
    }
    $.post("/api/passport/whoami", t, function(t) {
        200 === t.status ? (e = t.data.profile,
        $(".btnLogout").attr({
            title: e.user_name
        }).show()) : $(".btnLogout").hide()
    }, "json")
}),
$(function() {
    function e() {
        o.textContent = "\n    @media screen and (max-width: 1000px) {\n      .header-menu-active header nav .nav-menu {\n        height: " + ($(window).height() - $("body>header").height()) + "px\n      }\n    }\n    "
    }
    var t = document.createElement("style")
      , o = document.createTextNode("");
    $(window).resize(e),
    e(),
    t.appendChild(o),
    document.querySelector("head").appendChild(t),
    $("a").on("mousedown", function() {
        this.className.replace(/\barea_([\w_\-]+)/, function(e, t) {
            sessionStorage.module_position = t
        })
    })
});
