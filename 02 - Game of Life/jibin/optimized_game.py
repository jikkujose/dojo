import numpy as np
import sys
import time
import os

class Game:
    def __init__(self, size):
        self.board_size = size

        self.board = np.zeros(self.board_size, dtype=np.bool)
        self.dup_board = np.zeros((size[0]+2,size[1]+2), dtype=np.bool)
        self.board_neighbors = np.zeros_like(self.board, dtype=int)

        self.display_board = np.vectorize(self.display_cell)
        self.cell_new_state = np.vectorize(self._cell_new_state)

    def display_cell(self, cell):
        if cell == 1:
            return " ■ "
        else:
            return " □ "

    def _overpopulation(self, cell, neighbours):
        return 0

    def _continue_or_reproduce(self, cell, neighbours):
        if cell == 0 and neighbours == 2:
            return 0
        else:
            return 1

    def _underpopulation(self, cell, neighbours):
        return 0

    def get_live_neighbours(self, cell_x, cell_y):

        return np.sum(self.dup_board[cell_x-1:cell_x+2, cell_y-1:cell_y+2]) - self.dup_board[cell_x][cell_y]

    def _cell_new_state(self, cell, neighbours):
        # return self.rule[neighbours](cell, neighbours)

        if neighbours < 2:
            return False

        if neighbours == 2:
            return cell

        if neighbours == 3:
            return True

        if neighbours >= 4:
            return False


    def next_generation(self):

        self.dup_board[1:self.board_size[0]+1, 1:self.board_size[1]+1] = self.board

        for i in range(1, self.board_size[0]+1):
            for j in range(1, self.board_size[1]+1):
                self.board_neighbors[i-1][j-1] = self.get_live_neighbours(i, j)


        new_board_state = self.cell_new_state(self.board, self.board_neighbors)
        return new_board_state

    def run(self):
        while True:
            os.system("clear")
            np.savetxt(sys.stdout, self.display_board(self.board.T), fmt='%s', delimiter='', encoding='utf-8', newline='\n')
            time.sleep(0.5)
            self.board = self.next_generation()

if __name__ == "__main__":
    game = Game((10, 10))

    game.board[5][4] = 1
    game.board[5][3] = 1
    game.board[5][2] = 1
    game.board[4][4] = 1
    game.board[3][4] = 1
    game.board[2][4] = 1
    game.board[1][3] = 1
    game.board[4][1] = 1
    game.board[1][1] = 1

    game.run()