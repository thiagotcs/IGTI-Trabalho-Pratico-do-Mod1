window.addEventListener('load', start);

function start() {
  var rangeRed = document.querySelector('#rangeRed');
  var textRed = document.querySelector('#textRed');
  var rangeGreen = document.querySelector('#rangeGreen');
  var textGreen = document.querySelector('#textGreen');
  var rangeBlue = document.querySelector('#rangeBlue');
  var textBlue = document.querySelector('#textBlue');

  var resBoxColor = document.querySelector('#resBoxColor');
  var hex = document.querySelector('#hex');
  //var body = document.querySelector('body');

  textRed.value = rangeRed.value;
  textGreen.value = rangeGreen.value;
  textBlue.value = rangeBlue.value;

  function adicionarColor() {
    function mudarColor(Red, Green, Blue) {
      var rgb = `rgb(${Red.value}, ${Green.value}, ${Blue.value})`;
      resBoxColor.style.background = rgb;
      // body.style.background = rgb;
    }
    rangeRed.addEventListener('input', function () {
      textRed.value = rangeRed.value;
    }, false);
    rangeGreen.addEventListener('input', function () {
      textGreen.value = rangeGreen.value;
    }, false);
    rangeBlue.addEventListener('input', function () {
      textBlue.value = rangeBlue.value;
    }, false);
    mudarColor(textRed, textGreen, textBlue);
  }

  rangeRed.addEventListener('input', adicionarColor);
  rangeGreen.addEventListener('input', adicionarColor);
  rangeBlue.addEventListener('input', adicionarColor);

}