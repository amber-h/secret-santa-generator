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
      var recipient = assignRecipientTo(participant, potentialRecipients);
      pairs.push({
        purchaser: participant,
        recipient: recipient
      });
      potentialRecipients = removeAssignedRecipientFrom(potentialRecipients, recipient);
    });
    return pairs
  };

  function assignRecipientTo(participant, potentialRecipients){
    return participant !== potentialRecipients[potentialRecipients.length - 1] ? potentialRecipients[potentialRecipients.length - 1] : potentialRecipients[0];
  }

  function removeAssignedRecipientFrom(potentialRecipients, recipient) {
    return potentialRecipients.filter(function(p) {
      return p !== recipient;
    });
  }
});
