define(["./index"], function(FormGenerator) {

  describe("A form generator", function() {

    it("is defined", function() {
      expect(FormGenerator).toBeDefined();
    });

    it("is a function", function() {
      expect(typeof FormGenerator).toBe("function");
    });

    describe("instance", function() {

      it("is a DOM element", function() {
        expect(FormGenerator()).toExist();
      });

      it("should have a form-inline class", function() {
        expect(FormGenerator()).toHaveClass("form-horizontal");
      });

      it("should have a an input box for name and e-mail", function() {
        var inputFormat = [{
          type: "name",
          value: "Amber Awesome"
        }, {
          type: "email",
          value: "amber.awesome@example.com"
        }]

        var form = FormGenerator(inputFormat);
        var firstFormInput = form.querySelector("input:first-of-type");
        var secondFormInput = form.querySelector("input:last-of-type");

        expect(firstFormInput).toHaveClass("form-control");
        expect(firstFormInput).toHaveId("inputname");
        expect(firstFormInput.getAttribute("type")).toEqual("name");
        expect(firstFormInput.getAttribute("placeholder")).toEqual("Amber Awesome");
      });

    });

  });

});
