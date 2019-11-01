$(document).ready(function() {
  $("form#formOne").submit(function(event) {

    //Gather input from user (number)
    var number = $("input#number").val();
    var numberInput = parseInt(number);
  //  var numberArray = [];

    //Count from zero to inputted number and push it into array
    for (var currentNumber = 0; currentNumber <= numberInput; currentNumber += 1) {
      toString(currentNumber);
      function iterate(currentNumber) {
          if (currentNumber.includes(1)) {
            $("ul").append("<li>Beep!</li>");
          } else if (currentNumber.includes(2)) {
            $("ul").append("<li>Boop!</li>");
          } else if (currentNumber.includes(3)) {
            $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>");
          } else {
            $("ul").append("<li>" + currentNumber + "</li>");
          }
        }
      }

    $("#main").hide();
    $("#output").show();

    event.preventDefault();
  });
});

//Turn each array item into a string and output it

/*  function numberOutput(numberInput) {
  numberInput = toString(numberInput);
  if (numberInput.includes(1)) {
    $("ul").append("<li>Beep!</li>");
  } else if (numberInput.includes(2)) {
    $("ul").append("<li>Boop!</li>");
  } else if (numberInput.includes(3)) {
    $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
  } else {
    $("ul").append("<li>" + numberInput + "</li>")
  }
}*/


/*numberArray.forEach(function(item) {
    if (item.includes(1)) {
      $("ul").append("<li>Beep!</li>");
    } else if (item.includes(2)) {
      $("ul").append("<li>Boop!</li>");
    } else if (item.includes(3)) {
      $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>")
    } else {
      $("ul").append("<li>" + item + "</li>")
    }
  });*/

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
