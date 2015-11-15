require 'sinatra'
require 'json'
require_relative './lib/email_sender'

class App < Sinatra::Base

  get '/' do

  end

  post '/participants' do
    headers 'Access-Control-Allow-Origin' => '*'
    data = JSON.parse request.body.read
    puts "Hello #{data}!"
    EmailSender.new.send_mail
  end

end
