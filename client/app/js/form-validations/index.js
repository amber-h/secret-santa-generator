define([], function() {
  return function(form) {
    $(form).formValidation({
      framework: 'bootstrap',
      icon: {
        valid: 'glyphicon glyphicon-ok',
        invalid: 'glyphicon glyphicon-remove',
        validating: 'glyphicon glyphicon-refresh'
      },
      fields: {
        text: {
          row: '.col-xs-4',
          validators: {
            notEmpty: {
              message: 'Participant name is required'
            }
          }
        },
        email: {
          validators: {
            notEmpty: {
              message: 'Participant email address is required'
            },
            emailAddress: {
              message: 'The input is not a valid email address'
            }
          }
        }
      }
    });
  };
});
