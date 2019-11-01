//Business logic


//User interface logic
$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());

  for (var currentNumber = 0; currentNumber <= numberInput; currentNumber += 1) {
    numberInput += currentNumber;
    var numberOutput = numberInput.toString();
  }

  var count = function(num) {
    if (numberOutput.includes("1") === true) {
      $("ul").append("<li>Beep!</li>");
    } else if (numberOutput.includes("2") === true) {
      $("ul").append("<li>Boop!</li>");
    } else if (numberOutput.includes("3") === true) {
      $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
    }

  }

  $("#main").hide();
  $("#output").show();


  });
});
