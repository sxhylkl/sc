sa.quick("setSessionReferrer"),
sa.registerSessionOnce({
    session_page_url: location.href
}),
sa.registerPage({
    app_version: "20170714",
    module_position: sessionStorage.module_position
}),
sa.quick("autoTrack"),
window.onerror = function() {
    sa.track("sensors_error_report", {
        problem: JSON.stringify(arguments),
        error_report_pos: "window-statistics",
        page_url: location.href
    })
}
,
function() {
    function e() {
        var e = window.innerHeight || document.documentElement.clientHeight
          , t = [].slice.call(document.querySelectorAll("[data-scroll-wrapper]"))
          , o = 0
          , r = "";
        return t.forEach(function(t) {
            var a = t.getBoundingClientRect();
            a.top >= o && a.top >= 0 && a.top + .3 * a.height <= e && (o = a.top,
            r = t.getAttribute("data-scroll-wrapper"))
        }),
        r
    }
    var t = new Date;
    window.onbeforeunload = function() {
        if (window.saPageName) {
            var o = new Date
              , r = (o.getTime() - t.getTime()) / 1e3;
            sa.track(saPageName + "_leave", {
                pageUrl: location.href,
                pageStayTime: r,
                pagePosition: e()
            })
        }
    }
}();
var _hmt = _hmt || [];
!function() {
    var e = document.createElement("script");
    e.src = "//hm.baidu.com/hm.js?bf5399c1b8bd2f8990ce3acf7dae876e",
    e.async = 1;
    var t = document.getElementsByTagName("script")[0];
    t.parentNode.insertBefore(e, t)
}(),
function() {
    var e = document.createElement("script");
    e.async = 1;
    var t = window.location.protocol.split(":")[0];
    e.src = "https" === t ? "https://zz.bdstatic.com/linksubmit/push.js" : "http://push.zhanzhang.baidu.com/push.js";
    var o = document.getElementsByTagName("script")[0];
    o.parentNode.insertBefore(e, o)
}();
