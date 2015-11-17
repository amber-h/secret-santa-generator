require_relative '../lib/pair_generator'

describe 'Pair Generator' do

  before(:each) do
    @participants = []
  end

  describe '#generate_pairs' do

    context 'there is one participant' do
      it 'pairs the participant with themself' do
        participants = [{ "email" => "lonely.participant@example.com" }]
        actual_pairs = PairGenerator.new.generate_pairs(participants)

        expected_pairs = [
          { :purchaser =>
            { :email => "lonely.participant@example.com", :recipient => { :email => "lonely.participant@example.com" } }
          }
        ]

        expect(actual_pairs).to eq(expected_pairs)
      end
    end

    context 'there are two participants' do
      it 'pairs the first participant with the second participant' do
        participants = [{ "email" => "first.participant@example.com" }, { "email" => "second.participant@example.com" }]
        actual_pairs = PairGenerator.new.generate_pairs(participants)

        expected_pairs = [
          { :purchaser =>
            { :email => "first.participant@example.com", :recipient => { :email => "second.participant@example.com" } }
          },
          { :purchaser =>
            { :email => "second.participant@example.com", :recipient => { :email => "first.participant@example.com" } }
          }
        ]

        expect(actual_pairs).to eq(expected_pairs)
      end
    end

    context 'there are three participants' do
      it 'pairs the participants such that each purchaser has a unique recipient' do
        participants = [{ "email" => "first.participant@example.com" }, { "email" => "second.participant@example.com" }, { "email" => "third.participant@example.com" }]
        actual_pairs = PairGenerator.new.generate_pairs(participants)

        puts actual_pairs
        expect(actual_pairs[0][:purchaser][:email]).not_to eq(actual_pairs[0][:purchaser][:recipient][:email])
        expect(actual_pairs[1][:purchaser][:email]).not_to eq(actual_pairs[1][:purchaser][:recipient][:email])
        expect(actual_pairs[2][:purchaser][:email]).not_to eq(actual_pairs[2][:purchaser][:recipient][:email])
      end
    end

  end

end
