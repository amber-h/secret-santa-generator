function submitParticipants(){
  $("#submitParticipants").click(function (){
    var participants = [];
    var formElements = $(".form-group");
    formElements.each(function (formElement){
      var elementValue = $(formElement).find("input").val()
      console.log(elementValue)
      participants.push(elementValue);
    });
      console.log(participants);
  });
};
