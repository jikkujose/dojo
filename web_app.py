from flask import Flask, redirect, Response, request
import time
import numpy as np
from io import StringIO
import ast
from game import Game

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    def inner():
        clear_output = "function clear_output(){var board = document.getElementById('id');board.parentNode.removeChild(board);};"
        toggle = "function toggle(){window.location = '/toggle';return false;};"
        form = "<form method='POST' action='/start'>" \
                 "<input type='text' name='size' placeholder='size'>" \
                 "<input type='text' name='seed' placeholder='seed'>" \
                 "<input type='submit' value='Start' />" \
                 "<input type='button' onclick='toggle()' value='Pause/Restart' />" \
               "</form>"

        yield "<script>%s%s</script>" % (clear_output,toggle)
        yield form

        string_buffer = StringIO()

        if game:
            np.savetxt(string_buffer, game.display_board(game.board).T, fmt='%s', delimiter='', encoding='utf-8', newline='<br/>')
            yield '<div id="id">%s</div>' % string_buffer.getvalue()
            string_buffer.truncate(0)

            while(game_active):
                yield '<script>clear_output</script>'
                np.savetxt(string_buffer, game.display_board.T, fmt='%s', delimiter='', encoding='utf-8', newline='<br/>')
                yield '<div id="id">%s</div>' % string_buffer.getvalue()
                string_buffer.truncate(0)
                time.sleep(0.5)
                game.board = game.next_generation()

    return Response(inner(), mimetype='text/html')

@app.route('/start', methods=['POST'])
def start():
    global game, game_active, board_size, board_seed

    board_size = request.form.get('size')
    board_seed = request.form.get('seed')

    if board_size:
        board_size = ast.literal_eval(board_size)
        if not isinstance(board_size, tuple):
            return "Invalid board size."
        else:
            game = Game(board_size)

    if board_seed:
        board_seed = ast.literal_eval(board_seed)
        if not isinstance(board_seed, list):
            return "Invalid board seed."
        for points in board_seed:
            if not isinstance(points, tuple):
                return "Invalid board seed."

            game.board[points] = 1

    game_active = True

    return redirect('/')

@app.route('/toggle')
def toggle():
    global game_active
    game_active = not game_active
    return redirect('/')

if __name__ == '__main__':
    game = None
    game_active = True
    board_size = None
    board_seed = None

    app.run()