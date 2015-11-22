define([], function(){
  return function(inputElement, buttonId) {
    $(buttonId).click(function(e) {
      var inputElementFormat = $(inputElement).clone();
      $(inputElementFormat).insertBefore($("button#submitParticipants"));
    });
  }
})
