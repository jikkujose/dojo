from flask import Flask, redirect, Response, request
import time
from game import Game

if __name__ == '__main__':
    game = None
    app = Flask(__name__)
    app.run()