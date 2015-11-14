require(["form-generator/index", "pair-generator/index", "email-sender/index"], function(FormGenerator, PairGenerator, EmailSender) {
  var inputFormat = [{
    type: "email",
    value: "amber.awesome@example.com"
  }];

  var $form = $("form.form-horizontal");
  $form.validator();
  FormGenerator(inputFormat, $form);
  $("#addParticipant").click(function(e) {
    FormGenerator(inputFormat, $("form.form-horizontal"));
  });

  $(".form-horizontal").submit(function(e) {
    if (e.isDefaultPrevented()) {} else {
      var pairs = generatePairs();
      EmailSender(pairs);
    }
  });

  var generatePairs = function() {
    var participants = [];
    $("input").each(function(formElement) {
      var participant = {
        email: $("#" + formElement + "").val()
      };
      participants.push(participant);
    });
    return PairGenerator(participants);;
  };
});
