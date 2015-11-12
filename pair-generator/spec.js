define(["./index"], function (PairGenerator) {

  describe("A pair generator", function () {

    it("is defined", function() {
      expect(PairGenerator).toBeDefined();
    });

    it("should return a function", function() {
       expect(typeof PairGenerator).toBe("function");
    });

    describe("instance", function () {

      it("should return a single pair when there is only one participant", function() {
        var participant = { email: "amber.awesome@example.com" };
        var pairs = PairGenerator([participant]);

        var expectedPair = { purchaser: participant, recipient: participant}
        expect(pairs[0]).toEqual(expectedPair);
      });

      it("should return two pairs when there are two participants", function() {
        var firstParticipant = { email: "amber.awesome@example.com" };
        var secondParticipant = { email: "panda.bear@example.com" };

        var pairs = PairGenerator([firstParticipant, secondParticipant]);

        var expectedFirstPair = { purchaser: firstParticipant, recipient: secondParticipant}
        expect(pairs.length).toEqual(2);
        expect(pairs[0]).toEqual(expectedFirstPair);
      });

      it("should return 3 distinct pairs and each participant should appear as purchaser only once", function() {
        var firstParticipant = { email: "amber.awesome@example.com" };
        var secondParticipant = { email: "panda.bear@example.com" };
        var thirdParticipant = { email: "koala.bear@example.com" };

        var pairs = PairGenerator([firstParticipant, secondParticipant, thirdParticipant]);

        expect(pairs.length).toEqual(3);
        expect(pairs[0].purchaser).not.toEqual(pairs[1].purchaser);
        expect(pairs[0].purchaser).not.toEqual(pairs[2].purchaser);
        expect(pairs[1].purchaser).not.toEqual(pairs[2].purchaser);

        expect(pairs[0].purchaser).not.toEqual(pairs[0].recipient);
        expect(pairs[1].purchaser).not.toEqual(pairs[1].recipient);
        expect(pairs[2].purchaser).not.toEqual(pairs[2].recipient);
      });

      it("should not allow purchaser and recipient to be the same participant", function() {
        var firstParticipant = { email: "amber.awesome@example.com" };
        var secondParticipant = { email: "panda.bear@example.com" };
        var thirdParticipant = { email: "koala.bear@example.com" };

        var pairs = PairGenerator([firstParticipant, secondParticipant, thirdParticipant]);

        expect(pairs.length).toEqual(3);
        expect(pairs[0].purchaser).not.toEqual(pairs[0].recipient);
        expect(pairs[1].purchaser).not.toEqual(pairs[1].recipient);
        expect(pairs[2].purchaser).not.toEqual(pairs[2].recipient);
      });

      it("should not allow participant to be a recipient multiple times", function() {
        var firstParticipant = { email: "amber.awesome@example.com" };
        var secondParticipant = { email: "panda.bear@example.com" };
        var thirdParticipant = { email: "koala.bear@example.com" };

        var pairs = PairGenerator([firstParticipant, secondParticipant, thirdParticipant]);

        expect(pairs.length).toEqual(3);
        expect(pairs[0].recipient).not.toEqual(pairs[1].recipient);
        expect(pairs[0].recipient).not.toEqual(pairs[2].recipient);
        expect(pairs[1].recipient).not.toEqual(pairs[2].recipient);
      });

    });

  });
});
