//pizza1
$(document).ready(function () {
  $("#pizza1").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

//pizza2
$(document).ready(function () {
  $("#pizza2").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

//pizza3
$(document).ready(function () {
  $("#pizza3").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

//pizza4
$(document).ready(function () {
  $("#pizza4").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

//pizza5
$(document).ready(function () {
  $("#pizza5").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

//pizza6
$(document).ready(function () {
  $("#pizza6").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

//pizza7
$(document).ready(function () {
  $("#pizza7").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

//pizza8
$(document).ready(function () {
  $("#pizza8").hover(function () {
    $(this).css("opacity", "0.35");
  }, function () {
    $(this).css("opacity", "1.0");
  })
})

// corousel section
$(document).ready(function () {
  // Activate the Carousel, but pause it from the start
  $("#myCarousel").carousel("pause");

  // Go to the second item
  $("#myBtn").click(function () {
    $("#myCarousel").carousel(1);
  });

  // Go to the third item
  $("#myBtn2").click(function () {
    $("#myCarousel").carousel(2);
  });

  // Enable Carousel Indicators
  $(".item1").click(function () {
    $("#myCarousel").carousel(0);
  });
  $(".item2").click(function () {
    $("#myCarousel").carousel(1);
  });
  $(".item3").click(function () {
    $("#myCarousel").carousel(2);
  });

  // Enable Carousel Controls
  $(".carousel-control-prev").click(function () {
    $("#myCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function () {
    $("#myCarousel").carousel("next");
  });
});
// end of corousel section


