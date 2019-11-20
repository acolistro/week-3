function beep(numberInput) {
  var numberArray = [];
  for (i=0; i <= numberInput; i++) {
    if (i.toString().includes(3)) {
      numberArray.push("<li>I'm sorry, Dave. I'm afraid I can't do that.</li>");
    } else if (i.toString().includes(2)) {
      numberArray.push("<li>Boop!</li>");
    } else if (i.toString().includes(1)) {
      numberArray.push("<li>Beep!</li>");
    } else {
      numberArray.push("<li>" + i + "</li>");
    }
  }
  return numberArray;
};

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());
    let results = beep(numberInput);
    $(".unstyled").text("");

    results.forEach(outputList);

    function outputList(result) {
      $(".unstyled").append(result);
    };

    $("#output").show();

  });
});
