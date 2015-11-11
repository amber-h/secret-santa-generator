function addInput(inputFormat){
    var format = inputFormat;
    $("#addParticipant").click(function (){
      if(Array.isArray(format)) {
        var $form = $("form.form-horizontal");

        inputFormat.forEach(function (input) {
          var $formElement = $("<div>").addClass("form-group");
          var $label = $("<label>").attr("for", "input"+input.type+"").text("Email");
          $label.addClass("col-sm-2 control-label");

          var $inputElement = $("<div>").addClass("col-sm-10")
          var $input = $("<input id='input"+input.type+"'>").addClass("form-control");
          $input.attr("type", input.type);
          $inputElement.append($input);

          $formElement.append($label);
          $formElement.append($inputElement);

          $form.append($formElement);
        });
      };

    });
};
