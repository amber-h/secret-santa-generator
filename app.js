require(["form-generator/index", "pair-generator/index", "email-sender/index"], function(FormGenerator, PairGenerator, EmailSender) {
  var inputFormat = [{
    type: "email",
    value: "amber.awesome@example.com"
  }];

  var $form = $("form.form-horizontal");
  $form.validator();
  FormGenerator(inputFormat, $form);
  $("#addParticipant").click(function(e) {
    if (e.isDefaultPrevented()) {
      alert("invalid email")
    } else {
      FormGenerator(inputFormat, $("form.form-horizontal"));
    }
  });

  $(".form-horizontal").submit(function(e) {
    if(e.isDefaultPrevented()){
    } else {
      EmailSender(generatePairs());
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
     var pairs = PairGenerator(participants);
   }
});
