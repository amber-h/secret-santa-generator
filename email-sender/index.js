define([], function() {
  return function(pairs) {
    alert("IN EMAIL SENDER")
    pairs.forEach(function(pair) {
      sendEmail(pair);
    });

    function sendEmail(pair) {
      alert(pair)
      $.ajax({
        type: "POST",
        url: "https://mandrillapp.com/api/1.0/messages/send.json",
        data: {
          'key': 'KooggMys5J14GU90HIJPVg',
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
