$(document).ready(function() {
  $("form#formOne").submit(function(event) {

    //Gather input from user (number)
    var number = $("input#number").val();
    var numberInput = parseInt(number);
    var currentNumber = 0;
    var numberArray = [];

    //Count from zero to inputted number and push it into array
    while (currentNumber <= numberInput) {
      currentNumber += 1;
      numberInput += currentNumber;
      numberArray.push(numberInput);
    }

    numberArray.forEach(numberInput) {
      numberInput = toString(numberInput);
    }
    //var numberOutput = toString(numberInput);


    if (numberInput.includes(1)) {
      $("ul").append("<li>Beep!</li>");
    } else if (numberInput.includes(2)) {
      $("ul").append("<li>Boop!</li>");
    } else if (numberInput.includes(3)) {
      $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
    } else {
      $("ul").append("<li>" + numberInput + "</li>")
    }

    $("#main").hide();
    $("#output").show();

    event.preventDefault();
  });
});


    //$("ul.unstyled").append("<li>" + numberInput + "</li>");

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
