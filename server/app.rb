require 'sinatra'
require 'json'

class App < Sinatra::Base

  get '/' do

  end

  post '/participants' do
    headers 'Access-Control-Allow-Origin' => '*'
    data = JSON.parse request.body.read
    puts "Hello #{data}!"
  end

end
