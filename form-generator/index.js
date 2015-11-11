define([], function () {
  return function(inputFormat){
    var $form = $("<form>").addClass("form-inline");

    if(Array.isArray(inputFormat)) {

      inputFormat.forEach(function (input) {
          var $formElement = $("<div>").addClass("form-group");
          var $label = $("<label>").attr("for", "'input"+input.type+"'").text(input.type);

          var $inputElement = $("<input id='input"+input.type+"'>").addClass("form-control");
          $inputElement.attr("type", input.type);
          $inputElement.attr("placeholder", input.value);

          $formElement.append($label);
          $formElement.append($inputElement);

          $form.append($formElement);
      });

    }

    return $form[0];
  };
});
