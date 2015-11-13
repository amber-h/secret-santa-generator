define([], function() {
  return function(pairs) {
    console.log("IN EMAIL SENDER")
    pairs.forEach(function(pair) {
      sendEmail(pair);
    });

    function sendEmail(pair) {
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'API_KEY_HERE',
          'message': {
            'from_email': 'amber.houle3@gmail.com',
            'to': [{
              'email': pair.purchaser,
              'type': 'to'
            }],
            'subject': "Your secret santa has arrived",
            'text': "Your secret santa recipient is " + pair.recipient + ""
          }
        }
      });
    };

  };

});
