require 'sinatra'

class App < Sinatra::Base

  get '/' do

  end

  post '/participants' do
    puts "Hello World"
  end

end
