import time
import random

def emptyBoard(size):
    return [[0] * (size[1] + 2) for i in range(size[0] + 2)]

def randomBoard(size):
    board = emptyBoard(size)
    for y in range(len(board)-1):
        for x in range(len(board[0])-1):
            board[y+1][x+1] = random.randint(0, 1)
    return board

class World:
    def __init__(self, size, type='random'):
        self.size = size
        if type == 'random': b = randomBoard(size)
        else: b = emptyBoard(size)
        self.boards = [b, emptyBoard(size)]
        self.index = 0
        self.board = self.boards[self.index]

    def iterate(self):
        nb = self.boards[(self.index + 1) % 2]
        b = self.board

        r, c = self.size

        for y in range(1, r + 1):
            for x in range(1, c + 1):
                neighbors = b[y - 1][x - 1] + b[y - 1][x] + b[y - 1][x + 1] + b[y][x - 1] + b[y][x + 1] + b[y + 1][x - 1] + b[y + 1][x] + b[y + 1][x + 1]

                a = 0
                if b[y][x] == 0:
                    if neighbors == 3: a = 1
                else:
                    if neighbors == 2 or neighbors == 3: a = 1

                nb[y][x] = a

        self.index = (self.index + 1) % 2
        self.board = nb

if __name__ == "__main__":
    def f():
        w = World((1000, 1000))

        iterations = 10

        t = time.time()

        for i in range(iterations):
            w.iterate()

        t = time.time() - t
        t = 1000 * t / iterations

        print("%.2f" % t)

    f()
