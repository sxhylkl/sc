/MicroMessenger/i.test(navigator.userAgent) &&
  (document.write(
    '<~ src="//res.wx.qq.com/open/js/jweixin-1.2.0.js"></~>'.replace(
      /~/g,
      "script"
    )
  ),
  (function() {
    var e = document.querySelector("[data-wxjs-config]"),
      t = {};
    if (e)
      try {
        t = JSON.parse(e.getAttribute("data-wxjs-config") || "{}");
      } catch (n) {}
    $.getJSON(
      "/api/wechat/jsticket?url=" +
        encodeURIComponent(location.href.replace(/#.*$/, "")),
      function(e) {
        200 === e.status &&
          "undefined" != typeof wx &&
          ((e.data.jsApiList = [
            "onMenuShareTimeline",
            "onMenuShareAppMessage"
          ].concat(t.list || [])),
          wx.config(e.data),
          wx.ready(function() {
            var e =
              t.icon ||
              "https://sensorsdata.cn/assets/img/logo_wechat_fe862af.png";
            wx.onMenuShareTimeline({
              title: document.title,
              link: location.href,
              imgUrl: e
            }),
              wx.onMenuShareAppMessage({
                title: document.title,
                link: location.href,
                desc:
                  t.desc ||
                  "绁炵瓥鍒嗘瀽锛屾槸鍙互绉佹湁鍖栭儴缃茬殑鐢ㄦ埛琛屼负鍒嗘瀽浜у搧",
                imgUrl: e
              }),
              t.ready &&
                "function" == typeof window[t.ready] &&
                window[t.ready]();
          }));
      }
    );
  })());
