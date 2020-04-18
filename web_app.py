from flask import Flask, redirect, Response, request
import time
from game import Game

app = Flask(__name__)

@app.route('/', methods=['GET'])
def index():
    pass

if __name__ == '__main__':
    game = None
    app.run()