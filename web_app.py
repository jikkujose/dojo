from flask import Flask, redirect, Response, request
import time
from game import Game

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    def inner():
        clear_output = "<script>" \
                       "function clear_output(){var board = document.getElementById('id');board.parentNode.removeChild(board);}:"


if __name__ == '__main__':
    game = None
    app.run()