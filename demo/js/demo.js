$('.card form input[type="radio"]').on("change", function() {
  ($parent = $(this).parents(".card")),
    $parent.find(".buttons .btn").removeClass("active"),
    $parent
      .find(".buttons .btn:nth-of-type(" + ($(this).data("index") + 1) + ")")
      .addClass("active");
});
