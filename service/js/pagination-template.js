$(function() {
  function t(t) {
    0 >= t || (location = 1 === t ? a.homeUrl : a.pageUrl + "page/" + t + "/");
  }
  $parent = $("#templatePagination").parent();
  var a = JSON.parse($("#templatePagination").attr("data"));
  $parent.html(jhtmls.render($("#templatePagination").html(), a)),
    $parent.find("[cmd]").click(function() {
      var a = $(this).attr("cmd");
      switch (a) {
        case "goto":
          t(parseInt($(this).attr("data-page"), 10));
      }
    }),
    $parent.find('input[type="number"]').on("keydown", function(a) {
      13 === a.keyCode && t(parseInt($(this).val(), 10));
    });
});
