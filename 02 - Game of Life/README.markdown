# 02 - Game of Life

This challenge is about creating a board that simulates [Conway’s game of life][wp], given any starting position. 

# Game of life rules

Start with a two-dimensional grid of cells, where each cell is either alive or dead. In this version of the problem, the grid is finite, and no life can exist off the edges. When calculating the next generation of the grid, follow these rules:

   1. Any live cell with fewer than two live neighbours dies
   2. Any live cell with more than three live neighbours dies
   3. Any live cell with two or three live neighbours lives on to the next generation.
   4. Any dead cell with exactly three live neighbours becomes a live cell.

Your goal is to create a visual board that can be set to an initial position by clicking each cell and then when the simulation is played the program calculates the next generations of the board automatically until stopped.

## Instructions

1. Use standard prettier config (if JS like languages are used)
2. Build a web-based simulation that can be shared via a URL

[wp]: http://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
