require_relative '../lib/pair_generator'

describe 'Pair Generator' do

  before(:each) do
    @participants = []
  end

  describe '#generate_pairs' do

    context 'there is one participant' do
      it 'pairs the participant with themself' do
        participants = [{ :email => "lonely.participant@example.com" }]
        actual_pairs = PairGenerator.new.generate_pairs(participants)

        expected_pairs = [
          { :purchaser =>
            { :email => "lonely.participant@example.com", :recipient => { :email => "lonely.participant@example.com" } }
          }
        ]

        expect(actual_pairs).to eq(expected_pairs)
      end
    end

  

  end

end
