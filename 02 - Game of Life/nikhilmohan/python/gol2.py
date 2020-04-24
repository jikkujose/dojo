import numpy as np
import sys
import time
import os
import scipy.signal

class Game:
    def __init__(self, size):
        self.board_size = size

        self.board = np.zeros(self.board_size, dtype=np.bool)

        self.adjacent_matrix = np.ones((3, 3), dtype=int)
        self.adjacent_matrix[1][1] = 0

        self.board_neighbors = np.zeros_like(self.board, dtype=int)

        self.cell_new_state = np.vectorize(self._cell_new_state)

    def get_live_neighbours(self):
        return scipy.signal.convolve2d(self.board, self.adjacent_matrix, mode='same')

    def _cell_new_state(self, cell, neighbours):
        if neighbours < 2:
            return False

        if neighbours == 2:
            return cell

        if neighbours == 3:
            return True

        if neighbours >= 4:
            return False

    def next_generation(self):
        self.board_neighbors = self.get_live_neighbours()

        new_board_state = self.cell_new_state(self.board, self.board_neighbors)
        return new_board_state

if __name__ == "__main__":
    def f():
        game = Game((1000, 1000))

        iterations = 10

        t = time.time()

        for i in range(iterations):
            game.board = game.next_generation()

        t = time.time() - t
        t = 1000 * t / iterations

        print("%.2f" % t)

    f()
