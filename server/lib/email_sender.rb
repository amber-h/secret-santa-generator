require 'mail'

class EmailSender

  def send_mail
    Mail.defaults do
      delivery_method :smtp,
      :address => "192.168.99.100",
      :port => 25,
      :user_name  => 'usr',
      :password   => 'pwd',
      :enable_ssl => true
    end

    Mail.deliver do
      from    'amber.houle3@gmail.com'
      to      'amber.houle3@gmail.com'
      subject 'This is a test email'
      body    "HELLO TEST"
    end
  end

end
