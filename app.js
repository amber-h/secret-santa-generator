require(["form-generator/index", "pair-generator/index", "email-sender/index"], function(FormGenerator, PairGenerator, EmailSender) {
  var inputFormat = [{
    type: "email",
    value: "amber.awesome@example.com"
  }];

  var $form = $("form.form-horizontal");
  $form.validator();
  FormGenerator(inputFormat, $form);
  $("#addParticipant").click(function() {
    FormGenerator(inputFormat, $("form.form-horizontal"));
  });

  $(".form-horizontal").submit(function() {
    var participants = [];
    $("input").each(function(formElement) {
      var participant = {
        email: $("#" + formElement + "").val()
      };
      participants.push(participant);
      alert(participant.email)
    });
    var pairs = PairGenerator(participants);
    alert("I AM NOW HERE")
    EmailSender(pairs);
  });
});
