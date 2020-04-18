import numpy as np
import sys
import time
import os
import itertools

class Game:
    def __init__(self, x, y):
        self.x = x
        self.y = y
        self.rule = {
            0: self._underpopulation,
            1: self._underpopulation,
            2: self._continue_or_reproduce,
            3: self._continue_or_reproduce,
            4: self._overpopulation,
            5: self._overpopulation,
            6: self._overpopulation,
            7: self._overpopulation,
            8: self._overpopulation
        }
        self.board = np.zeros((x,y), dtype=np.int)
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

        neighbour_postions = set(itertools.product(range(-1,2),range(-1,2))) - {(0, 0)}
        live_cells = 0


        for position in neighbour_postions:
            try:
                x = cell_x + position[0]
                y = cell_y + position[1]

                if x == -1 or y == -1:
                    continue

                live_cells += self.board[x][y]
            except IndexError:
                pass

        return live_cells

    def _cell_new_state(self, cell, neighbours):
        return self.rule[neighbours](cell, neighbours)

    def next_generation(self):

        board_neighbors = np.zeros_like(self.board)

        for i in range(0, board_neighbors.shape[0]):
            for j  in range(0, board_neighbors.shape[1]):
                board_neighbors[i][j] = self.get_live_neighbours(i, j)

        new_board_state = self.cell_new_state(self.board, board_neighbors)
        return new_board_state

    def run(self):
        while True:
            os.system("clear")
            np.savetxt(sys.stdout, self.display_board(self.board.T), fmt='%s', delimiter='', encoding='utf-8', newline='\n')
            time.sleep(0.5)
            self.board = self.next_generation()

if __name__ == "__main__":
    game = Game(10, 10)

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