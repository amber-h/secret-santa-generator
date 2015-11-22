require 'sinatra'
require 'json'
require_relative './lib/email_sender'
require_relative './lib/pair_generator'

class App < Sinatra::Base
  set :bind, '0.0.0.0'
  set :port, 4567

  post '/participants' do
    headers 'Access-Control-Allow-Origin' => '*'

    participants = JSON.parse request.body.read
    pairs = PairGenerator.new.generate_pairs participants
    EmailSender.new.send_mail pairs

    response
  end

end
