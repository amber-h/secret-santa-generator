class PairGenerator

  def generate_pairs participants
    return [format_pair(participants.first, participants.first)] if participants.size == 1

    potential_recipients = Array.new(participants)
    pairs = []

    participants.each do |participant|
      recipient_index = Random.rand(potential_recipients.length)

      while potential_recipients[recipient_index]["email"] == participant["email"]
         recipient_index = Random.rand(potential_recipients.length)
      end

      pairs.push(format_pair(participant, potential_recipients[recipient_index]))
      potential_recipients.delete_at(recipient_index)
    end

    return pairs
  end


  private

  def format_pair purchaser, recipient
    { :purchaser =>
      { :name => purchaser["name"],
        :email => purchaser["email"],
        :recipient => { :name => recipient["name"], :email => recipient["email"] }
      }
    }
  end

end
