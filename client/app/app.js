require(["js/form-generator/index", "js/add-form-element/index", "js/form-validations/index"], function(InputTemplate, AddFormElement, FormValidations) {
  var inputFormat = [{
    label: "Name",
    type: "text",
    value: "Amber Awesome",
    boxSize: "col-md-4"
  }, {
    label: "Email",
    type: "email",
    value: "amber.awesome@example.com",
    boxSize: "col-md-6"
  }]

  var $form = $("form.form-horizontal");
  $(InputTemplate(inputFormat)).insertBefore($("#buttonRow"));
  FormValidations($form);

  $("#addParticipant").click(function(e) {
    var inputElementFormat = InputTemplate(inputFormat);
    $("form.form-horizontal").formValidation('addField', $(inputElementFormat).find('input[name="text"]'));
    $("form.form-horizontal").formValidation('addField', $(inputElementFormat).find('input[name="email"]'));
    $(inputElementFormat).hide().insertBefore($("#buttonRow")).fadeIn(150);
  });

  $(".form-horizontal").submit(function(event) {
    event.preventDefault();
      var participants = formatParticipants();
      sendRequest(participants);
  });

  var formatParticipants = function() {
    var participants = [];
    var names = [];
    var emails = [];

    $(".form-group").each(function(index) {
      var $inputField = $(".form-group").eq(index).find($("input"));
      var name = $inputField.eq(0).val();
      var email = $inputField.eq(1).val();

      var participant = {
        name: name,
        email: email
      };
      participants.push(participant);
    });
    return participants;
  };

  var sendRequest = function(participants) {
    $.post("/participants", JSON.stringify(participants),
    function(data, status){
        window.location = "html/thankyou.html";
    });
  };

});
