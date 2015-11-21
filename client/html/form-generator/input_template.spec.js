define(["./input_template"], function(InputTemplate) {

  describe("An input template", function() {

    it("is defined", function() {
      expect(InputTemplate).toBeDefined();
    });

    it("is a function", function() {
      expect(typeof InputTemplate).toBe("function");
    });

    describe("instance", function() {

      it("is a DOM element", function() {
        expect(InputTemplate()).toExist();
      });

      it("has input labels based on input format", function() {
        var inputFormat = [{
          label: "Name",
          boxSize: "col-md-4"
        }, {
          label: "Email",
          boxSize: "col-md-4"
        }]

        var form = InputTemplate(inputFormat);

        var firstLabel = form.querySelector("label:first-of-type");
        expect(firstLabel).toHaveClass("col-md-4");
        expect(firstLabel).toHaveText("Name");

        var secondLabel = form.querySelector("label:last-of-type");
        expect(secondLabel).toHaveClass("col-md-4");
        expect(secondLabel).toHaveText("Email");
      })

      it("has input elements based on input format", function() {
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

        var form = InputTemplate(inputFormat);

        var firstInput = form.querySelector(".input:first-of-type");
        expect(firstInput).toHaveClass("col-md-2");

        var firstInputElement = firstInput.querySelector("input");
        expect(firstInputElement).toHaveClass("form-control");
        expect(firstInputElement.getAttribute("name")).toEqual("text");
        expect(firstInputElement.getAttribute("placeholder")).toEqual("Amber Awesome");

        var secondInput = form.querySelector(".input:last-of-type");
        expect(secondInput).toHaveClass("col-md-4");

        var secondInputElement = secondInput.querySelector("input");
        expect(secondInputElement).toHaveClass("form-control");
        expect(secondInputElement.getAttribute("name")).toEqual("email");
        expect(secondInputElement.getAttribute("placeholder")).toEqual("amber.awesome@example.com");
      })

    });

  });

});
