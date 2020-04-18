from flask import Flask, redirect, Response, request
import time
from game import Game

@app.route('/', methods=['GET']):
def index():
    pass

if __name__ == '__main__':
    game = None
    app = Flask(__name__)
    app.run()