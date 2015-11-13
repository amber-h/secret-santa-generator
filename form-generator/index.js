define([], function() {
  return function(inputFormat, $form) {
    var $form = $form || $("<form>").addClass("form-horizontal");

    if (Array.isArray(inputFormat)) {
      inputFormat.forEach(function(input) {
        var $formElement = $("<div>").addClass("form-group");
        var $label = $("<label>").attr("for", "input" + input.type + "").text("Email");
        $label.addClass("col-sm-2 control-label");

        var $inputElement = $("<div>").addClass("col-sm-6")
        var $input = $("<input name='" + input.type + "' id='" + $("input").length + "'>").addClass("form-control");
        $input.attr("type", input.type);
        $input.attr("placeholder", input.value);
        $input.attr("required");
        $input.attr("data-error", "Invalid email address");
        $input.prop("required", "true");

        $inputElement.append($input);

        var $validations = $('<div>').addClass("help-block with-errors");

        $formElement.append($label);
        $formElement.append($inputElement);
        $formElement.append($validations);

        $formElement.insertBefore($("button#submitParticipants"));
      });
    };
    return $form[0];
  };
});
