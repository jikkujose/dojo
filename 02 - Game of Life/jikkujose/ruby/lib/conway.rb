module CellularAutomata
  module Conway
    @translation_addresses = [-1, 0, 1].product([-1, 0, 1]) - [[0, 0]]

    def self.next_state(board)
      x, y = dimensions(board)

      x.times.map do |_x|
        y.times.map do |_y|
          will_cell_live?(board, _x, _y)
        end
      end
    end

    def self.will_cell_live?(board, x, y)
      is_alive = board[x][y]

      under_populated = ->(n) { n < 2 }
      stable = ->(n) { n == 3 }
      over_populated = ->(n) { n > 3 }

      case alive_neighbour_count(board, x, y)
      when under_populated
        false
      when 2
        is_alive ? true : false
      when stable
        true
      when over_populated
        false
      end
    end

    def self.alive_neighbour_count(board, x, y)
      @translation_addresses.count do |_x, _y|
        board[x + _x][y + _y] if valid_index?(board, x + _x, y + _y)
      end
    end

    def self.valid_index?(board, x, y)
      x_max, y_max = dimensions(board)

      x >= 0 && y >= 0 && x < x_max && y < y_max
    end

    def self.dimensions(board)
      [board.count, board[0].count]
    end
  end
end
