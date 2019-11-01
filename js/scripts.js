$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    var numberInput = parseInt($("input#number").val());


    /*var currentNumber = 0;

    var numberOutput = function() {
      while (currentNumber <= numberInput) {
        currentNumber += 1;
        numberInput += currentNumber;
      }
    }

    var listItemOutput = numberInput.numberOutput();

    if (listItemOutput.includes("1")) {
      $("ul").append("<li>Beep!</li>");
    } else if (listItemOutput.includes("2")) {
      $("ul").append("<li>Boop!</li>");
    } else if (listItemOutput.includes("3")) {
      $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
    } else {
      $("ul").append("<li>" + listItemOutput + "</li>")
    }*/



    $("#main").hide();
    $("#output").show();

    event.preventDefault();
  });
});
