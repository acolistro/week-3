$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    var numberArray = []
    var currentNumber = 0;


    while (currentNumber <= numberInput) {
      currentNumber += 1;
      numberInput += currentNumber;
      numberArray.push(numberInput);
    }



    /*if (numberOutput.includes("1")) {
      $("ul").append("<li>Beep!</li>");
    } else if (numberOutput.includes("2")) {
      $("ul").append("<li>Boop!</li>");
    } else if (numberOutput.includes("3")) {
      $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
    } else {
      $("ul").append("<li>" + numberOutput + "</li>")
    }*/



    $("#main").hide();
    $("#output").show();


  });
});
