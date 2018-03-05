$(".tabbar .tabs li a").each(function() {
  String($(this).attr("href")).replace(/#.*$/, "") ===
    document.location.pathname &&
    $(this)
      .parents("li")
      .addClass("active");
}),
  $(function() {
    var t = "sensordata_user_0.1",
      a = {
        fetch: function() {
          try {
            return JSON.parse(sessionStorage[t] || "{}");
          } catch (a) {
            return {};
          }
        },
        save: function(a) {
          try {
            a
              ? (sessionStorage[t] = JSON.stringify(a))
              : delete sessionStorage[t];
          } catch (e) {}
        }
      };
    $(".cards .trial .btn").click(function() {
      var t = a.fetch();
      (t.contact = $('.cards .trial input[type="text"]').val()),
        a.save(t),
        $(".cards .trial a.register").click();
    });
  });
