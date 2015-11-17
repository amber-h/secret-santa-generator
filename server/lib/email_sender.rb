require 'mandrill'

class EmailSender

  def send_mail pairs
    mandrill = Mandrill::API.new ENV['MANDRILL_API_KEY']

    pairs.each do |pair|
      begin
        message = build_email pair[:purchaser][:email], pair[:purchaser][:recipient][:email]
        async = true
        result = mandrill.messages.send message, async

      rescue Mandrill::Error => e
        puts "A mandrill error occurred: #{e.class} - #{e.message}"
      raise
      end
    end
  end

  private

def build_email email_recipient, gift_recipient
  {
    "from_email"=>"santa@secretsantagenerator.com",
    "text"=>"Your secret santa is #{gift_recipient}",
    "to"=>
      [{"email" => email_recipient,
        "type" => "to",
        "name "=> "Recipient Name"}],

    "subject"=>"example subject",
    "from_name"=>"Example Name"
  }
end

end
