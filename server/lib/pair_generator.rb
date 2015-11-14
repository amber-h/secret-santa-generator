class PairGenerator

  def generate_pairs participants
    pairs = [
      { :purchaser => { :email => participants.first[:email], :recipient => { :email => participants.first[:email] } } }
    ]
    return pairs
  end

end
