from flask import Flask, redirect, Response, request
import time
import numpy as np
from io import StringIO
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

        yield "<script>"+clear_output+"</script>"
        yield form

        string_buffer = StringIO()

        if game:
            np.savetxt(string_buffer, game.display_board.T, fmt='%s', delimiter='', encoding='utf-8', newline='<br/>')
            yield '<div id="id">%s</div>' % string_buffer.getvalue()
            string_buffer.truncate(0)

            while(game_active):
                pass

if __name__ == '__main__':
    game = None
    game_active = True
    app.run()