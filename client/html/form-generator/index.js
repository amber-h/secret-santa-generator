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
          $inputElement.attr("type", input.type);
          $inputElement.attr("placeholder", input.value);

          $labelRow.append($label);
          $input.append($inputElement);
          $inputRow.append($input);
      })

      if($(".form-group").length > 0) {
        var $removeInput = $("<div>").addClass("removeInput col-s-1");
        var $button = $("<button>").attr("type", "button").addClass("btn btn-default");
        var $icon = $("<i>").addClass("fa fa-minus");
        $inputRow.append($removeInput.append($button.append($icon)));

        $($removeInput).click(function() {
          var $row = $(this).parents(".form-group");
          $row[0].remove();
        });
      }
    }

    $formElement.append($labelRow);
    $formElement.append($inputRow);

    return $formElement[0];
  };
});
