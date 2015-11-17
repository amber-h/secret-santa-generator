require(["form-generator/index"], function(FormGenerator) {
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

  $(".form-horizontal").submit(function(event) {
    event.preventDefault();
      var participants = formatParticipants();
      sendRequest(participants);
  });

  var formatParticipants = function() {
    var participants = [];
    $("input").each(function(formElement) {
      var participant = {
        email: $("#" + formElement + "").val()
      };
      participants.push(participant);
    });
    return participants;
  };

  var sendRequest = function(participants) {
    $.post("http://192.168.99.100:4567/participants", JSON.stringify(participants),
    function(data, status){
        alert("Data: " + data + "\nStatus: " + status);
    });
  };

});
