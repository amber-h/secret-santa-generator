define(["./index"], function(AddFormElement) {

  describe("A form generator", function() {

    it("is defined", function() {
      expect(AddFormElement).toBeDefined();
    });

    it("is a function", function() {
      expect(typeof AddFormElement).toBe("function");
    });

    it("responds to click action", function() {
      setFixtures('<button id="addParticipant" type="button"></button>'
                  + '<button id="submitParticipants" type="button"></button>');

      var inputElement = $("<div id='elementToAdd'>").text("Some Content");
      AddFormElement(inputElement, "#addParticipant");

      var spyEvent = spyOnEvent('#addParticipant', 'click');
      $('#addParticipant').trigger("click");

      expect('click').toHaveBeenTriggeredOn('#addParticipant');
      expect($("#elementToAdd")).toHaveText("Some Content");
    });

  });
});
