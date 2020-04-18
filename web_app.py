from flask import Flask, redirect, Response, request
import time
from game import Game

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    def inner():
        clear_output = "function clear_output(){var board = document.getElementById('id');board.parentNode.removeChild(board);}:"
        form = "<form method='POST' action='/start'>" \
                 "<input type='text' name='size' placeholder='size'>" \
                 "<input type='text' name='seed' placeholder='seed'>" \
                 "<input type='submit' value='Start' />" \
               "</form>"




if __name__ == '__main__':
    game = None
    app.run()