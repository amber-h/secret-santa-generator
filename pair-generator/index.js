define([], function() {
  return function(participants) {
    var pairs = [];
    if (participants.length == 1) {
      pairs = [{
        purchaser: participants[0],
        recipient: participants[0]
      }];
      return pairs;
    }
    var potentialRecipients = participants;
    participants.forEach(function(participant) {
      var recipient = participant !== potentialRecipients[potentialRecipients.length - 1] ? potentialRecipients[potentialRecipients.length - 1] : potentialRecipients[0];
      pairs.push({
        purchaser: participant,
        recipient: recipient
      });
      potentialRecipients = potentialRecipients.filter(function(p) {
        return p !== recipient;
      });
    });
    return pairs
  };
});
