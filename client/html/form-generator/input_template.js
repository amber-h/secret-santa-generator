define([], function() {
  return function(inputFormat) {
    var $formElement = $("<div>").addClass("form-group");
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

          $labelRow.append($label);
          $input.append($inputElement);
          $inputRow.append($input);
      })

      if($(".form-group").length > 0) {
        var $removeButton = $("<div>").addClass("removeInput col-s-1");
        var $button = $("<button>").attr("type", "button").addClass("btn btn-default");
        var $icon = $("<i>").addClass("fa fa-minus");
        $removeButton.append($button.append($icon));
        $inputRow.append($removeButton);
      }
    }

    $formElement.append($labelRow);
    $formElement.append($inputRow);

    return $formElement[0];
  };
});
