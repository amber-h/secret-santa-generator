define([], function() {
  return function(inputFormat) {
    var $inputElement = $("<div>").addClass("inputElement");
    var $labelRow = $("<div>").addClass("row");
    var $inputRow = $("<div>").addClass("row");

    var $label;
    if (Array.isArray(inputFormat)) {
      inputFormat.forEach(function(input){
          var $label = $("<label>").text(input.label).addClass("col-md-4");

          $labelRow.append($label);
      })

    }

    $inputElement.append($labelRow);
    $inputElement.append($inputRow);
    return $inputElement[0];

  };
});
