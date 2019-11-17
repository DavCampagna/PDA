### Testing task 2 code:

# Carry out dynamic testing on the code below.
# Correct the errors below that you spotted in task 1.

class Card

attr_reader :suit, :value

  def initialize(suit, value)
    @suit = suit
    @value = value
  end

  def check_for_ace()
    if value == 1
      return true
    else
      return false
    end
  end

  def self.highest_card(card1, card2)
    if card1.value > card2.value
      return card1.value
    else
      return card2.value
    end
  end

  def self.cards_total(cards)
    total = 0
      for card in cards
        total += card.value
      end
    return "You have a total of" + " " + total.to_s
  end

end
