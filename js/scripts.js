$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var numIntput = x
    var num = x

  for (var currentNumber = 0; currentNumber <= num; currentNumber += 1) {
    num += currentNumber;
  }

  $("#main").hide();
  $("#output").show();

  event.preventDefault();
  });
});
