#0.60 -> 0.48 -> 0.03 -> 0.01
import pygame
from optimized_game import Game

size = (900, 930)

width = 29
height = 29
margin = 1

BLACK = (0, 0, 0)
WHITE = (255, 255, 255)
GREEN = (0, 255, 0)
RED = (255, 0, 0)

start = False
done = False

board_size = (size[0] // (width + margin), (size[1] - 30) // (height + margin))

import time


def draw_button(position, text):
    pygame.draw.rect(screen, RED, (position[0], position[1], 80, 30))
    smallText = pygame.font.Font(pygame.font.get_default_font(), 15)
    textSurf = smallText.render(text, True, BLACK)
    textRect = textSurf.get_rect()
    textRect.center = ((position[0] + 40, position[1] + 15))
    screen.blit(textSurf, textRect)


pygame.init()

screen = pygame.display.set_mode(size)

pygame.display.set_caption("Game of Life")

game = Game(board_size)

clock = pygame.time.Clock()

while not done:

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            done = True
        elif event.type == pygame.MOUSEBUTTONDOWN:
            if pos[1] < 30:
                if 400 <= pos[0] <= 480:
                    start = not start

            elif not start:
                column = pos[0] // (width + margin)
                row = (pos[1] - 30) // (height + margin)

                game.board[row][column] = not game.board[row][column]

    pos = pygame.mouse.get_pos()
    x = pos[0]
    y = pos[1]

    screen.fill(BLACK)
    if start:
        draw_button((400, 0), "Pause")
    else:
        draw_button((400, 0), "Start")

    if start:
        start_time = time.process_time()
        game.board = game.next_generation()
        print(time.process_time() - start_time)

    for row in range(board_size[0]):
        for column in range(board_size[1]):
            if game.board[row][column]:
                color = GREEN
            else:
                color = WHITE
            pygame.draw.rect(screen, color,
                             [margin + (margin + width) * column, margin + (margin + height) * row + 30, width, height])

    pygame.display.flip()

    clock.tick(120)

pygame.quit()
