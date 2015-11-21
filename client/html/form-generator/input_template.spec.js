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

      it("has a row class for the label row and input row", function() {
        console.log(InputTemplate())
        expect(InputTemplate()).toHaveClass("row");
        //test that you can find 2 instances of row class;
      });

      it("has input labels based on input format", function() {
        var inputFormat = [{ label: "Name" }, { label: "Email"}]

        var form = InputTemplate(inputFormat);

        var firstLabel = form.querySelector("label:first-of-type");
        expect(firstLabel).toHaveClass("col-md-4");
        expect(firstLabel).toHaveText("Name");

        var secondLabel = form.querySelector("label:last-of-type");
        expect(secondLabel).toHaveClass("col-md-4");
        expect(secondLabel).toHaveText("Email");
      })

      // it("should have a an input box for name and e-mail", function() {
      //   var inputFormat = [{
      //     label: "Name",
      //     type: "text",
      //     value: "Amber Awesome",
      //     boxSize: "col-md-2"
      //   }, {
      //     label: "Email",
      //     type: "email",
      //     value: "amber.awesome@example.com",
      //     boxSize: "col-md-4"
      //   }]
      //
      //   var form = InputTemplate(inputFormat);
      //   var firstFormInput = form.querySelector("input:first-of-type");
      //   var secondFormInput = form.querySelector("input:last-of-type");
      //
      //   expect(firstFormInput).toHaveClass("form-control");
      //   expect(firstFormInput).toHaveId("inputname");
      //   expect(firstFormInput.getAttribute("type")).toEqual("name");
      //   expect(firstFormInput.getAttribute("placeholder")).toEqual("Amber Awesome");
      // });

    });

  });

});
