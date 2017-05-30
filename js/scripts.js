$(document).ready(function() {
  $(".clickable").click(function() {
    $("#blossoms-showing").toggle();
    $("#blossoms-hidden").toggle();
  });

  $(".fade_it").click(function() {
    $("#guam-fading").fadeOut();

  });


});
