var numberArray = [];

function numberOutput(element) {
  var outputString = element.toString();
    if (outputString.includes(3)) {
      $("ul").append("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>");
    } else if (outputString.includes(2)) {
      $("ul").append("<li>Boop!</li>");
    } else if (outputString.includes(1)) {
      $("ul").append("<li>Beep!</li>");
    } else {
      $("ul").append("<li>" + outputString + "</li>");
    }
  };


$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());

    for (i=0; i <= numberInput; i++) {
      numberArray.push(i);
      console.log(numberArray);
    }

    numberArray.forEach(numberOutput);

    $("#main").hide();
    $("#output").show();

  });
});
