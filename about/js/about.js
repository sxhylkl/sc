$(".poto").on("click", ".left", function() {
  $(".poto .center")
    .removeClass("center")
    .addClass("left"),
    $(this)
      .removeClass("left")
      .addClass("center");
}),
  $(".poto").on("click", ".right", function() {
    $(".poto .center")
      .removeClass("center")
      .addClass("right"),
      $(this)
        .removeClass("right")
        .addClass("center");
  });
