require(["form-generator/index", "add-form-element/index"], function(InputTemplate, AddFormElement) {
  var inputFormat = [{
    label: "Name",
    type: "text",
    value: "Amber Awesome",
    boxSize: "col-md-2"
  }, {
    label: "Email",
    type: "email",
    value: "amber.awesome@example.com",
    boxSize: "col-md-4"
  }]

  var $form = $("form.form-horizontal");
  $form.validator();

  $(InputTemplate(inputFormat)).insertBefore($("button#submitParticipants"));

  $("#addParticipant").click(function(e) {
    var inputElementFormat = InputTemplate(inputFormat);
    $(inputElementFormat).insertBefore($("button#submitParticipants"));
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
