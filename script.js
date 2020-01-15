var currentSlider = 1;
var nextSlider = 2;
var previousSlider = 0;



function goDown() {
  if ($("#slider-"+nextSlider).length > 0) {
    currentSlider += 1;
    $("body,html").animate(
      {
        scrollTop: $('#slider-'+currentSlider).offset().top
      },
      800
    );
  } else {
    return false
  }
  previousSlider += 1;
  nextSlider += 1;
};

function goUp() {
  if ($("#slider-"+previousSlider).length > 0) {
    currentSlider -= 1;
    $("body,html").animate(
      {
        scrollTop: $('#slider-'+currentSlider).offset().top
      },
      800
    );
  } else {
    return false
  }
  previousSlider -= 1;
  nextSlider -= 1;
};

$(document).ready(function() {
  $("#btn-down").on('click', function() {
    goDown();
  });
  $("#btn-up").on('click', function() {
    goUp();
  });
  $(document).keydown(function(e) {
    switch(e.which) {
    case 38:
      goUp();
    break;
    case 40:
      goDown();
    break;

    default: return; // exit this handler for other keys
  }
e.preventDefault(); // prevent the default action (scroll / move caret)

  })
});
