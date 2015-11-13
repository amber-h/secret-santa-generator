define([], function () {
  return function (inputFormat, $form){
    var $form = $form || $("<form>").addClass("form-horizontal");

    if(Array.isArray(inputFormat)) {
      inputFormat.forEach(function (input) {
        var $formElement = $("<div>").addClass("form-group has-success");
        var $label = $("<label>").attr("for", "input"+input.type+"").text("Email");
        $label.addClass("col-sm-2 control-label");

        var $inputElement = $("<div>").addClass("col-sm-10")
        var $input = $("<input name='"+input.type+"' id='"+$("input").length+"'>").addClass("form-control");
        $input.attr("type", input.type);
        $inputElement.append($input);
        $input.attr("placeholder", input.value)

        $formElement.append($label);
        $formElement.append($inputElement);

        $formElement.insertBefore($("button#submitParticipants"));
      });
    };
    return $form[0];
  };
});
