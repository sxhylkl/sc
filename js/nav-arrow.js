$(".nav-next, .nav-prev").on("click", function() {
    var a = $(this).parents(".nav-parent")
      , n = a.find(".nav [data-index].active")
      , d = $(this).hasClass("nav-next") ? 1 : -1
      , e = parseInt(n.data("index")) + d
      , i = a.find('.nav [data-index="' + e + '"]');
    if (!(i.length <= 0)) {
        var v = a.find(".nav-desc [data-index]");
        a.find(".nav [data-index]").removeClass("active"),
        v.removeClass("active"),
        i.addClass("active"),
        a.find('.nav-desc [data-index="' + e + '"]').addClass("active"),
        v.each(function(n) {
            a.find(".nav-desc").removeClass("nav-index-" + n)
        }),
        a.find(".nav-desc").addClass("nav-index-" + e)
    }
});
