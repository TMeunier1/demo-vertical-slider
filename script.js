var currentSlider = 1;
var nextSlider = 2;
var previousSlider = 0;
var currentPosition = 0;
var nextPosition = 0;

var sizeOfHeader = $('header').height();
var sizeOfContainer = $('#mainContainer').height();
var sizeOfFooter  = $('footer').height();


function goDown() {
  if ($("#slider-"+nextSlider).length > 0) {
    currentSlider += 1;
    nextPosition = currentPosition+sizeOfContainer;
    $("#sliderContainer").animate(
      {
        top: -nextPosition
      },
      800
    );
    currentPosition = nextPosition;
    previousSlider += 1;
    nextSlider += 1;
  } else {
    return false
  }
};

function goUp() {
  if ($("#slider-"+previousSlider).length > 0) {
    currentSlider -= 1;
    nextPosition = currentPosition-sizeOfContainer;
    $("#sliderContainer").animate(
      {
        top: -nextPosition
      },
      800
    );
    currentPosition = nextPosition;
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

    default: return;
  }
e.preventDefault();

  })
});
