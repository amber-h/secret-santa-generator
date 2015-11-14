define([], function() {
  return function(pairs) {

    var sendEmail = function(pair) {
      alert(pair.purchaser.email)
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'API_KEY',
          'message': {
            'from_email': 'amber.houle3@gmail.com',
            'to': [{
              'email': pair.purchaser.email,
              'type': 'to'
            }],
            'subject': "Your secret santa has arrived",
            'text': "Your secret santa recipient is " + pair.recipient.email + ""
          }
        }
      });
    };

    pairs.forEach(function(pair) {
      sendEmail(pair);
    });
  };

});
