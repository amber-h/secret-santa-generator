define([], function() {
  return function(inputFormat) {
    var $inputElement = $("<div>").addClass("inputElement");
    var $labelRow = $("<div>").addClass("row");
    var $inputRow = $("<div>").addClass("row");

    var $label;
    if (Array.isArray(inputFormat)) {
      inputFormat.forEach(function(input){
          var $label = $("<label>").text(input.label).addClass(input.boxSize);
          var $input = $("<div>").addClass("input").addClass(input.boxSize);
          var $inputElement = $("<input>").addClass("form-control");
          $inputElement.attr("name", input.type);
          $inputElement.attr("placeholder", input.value);

          $input.append($inputElement);

          $labelRow.append($label);
          $inputRow.append($input);
      })

    }

    $inputElement.append($labelRow);
    $inputElement.append($inputRow);
    return $inputElement[0];

  };
});
