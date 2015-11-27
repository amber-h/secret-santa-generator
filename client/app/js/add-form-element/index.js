define([], function(){
  return function(inputElement, buttonId) {
    var $inputElementFormat;

    $(buttonId).click(function(e) {
      $inputElementFormat = $(inputElement).clone();

      if($(".form-group").length > 0) {
        var $removeInput = $("<div>").addClass("removeInput col-s-1");
        var $button = $("<button>").attr("type", "button").addClass("btn btn-default");
        var $icon = $("<i>").addClass("fa fa-minus");

        var $inputRow = $($inputElementFormat.find(".row").last());
        $inputRow.append($removeInput.append($button.append($icon)));

        $($removeInput).click(function(removeInput) {
          var row = $(this).parents(".form-group");
          $(row[0]).fadeOut(150, function() { $(this).remove(); });
        });
      }

      $inputElementFormat.insertBefore($("#buttonRow"));
    });

  }
})
