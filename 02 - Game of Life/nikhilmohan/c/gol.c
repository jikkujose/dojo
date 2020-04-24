#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define N 1000

int boards[2][N+2][N+2], boardIndex = 0, (*board)[N+2], (*nb)[N+2];

void emptyBoard(int b[N+2][N+2]) {
  for(int y = 1; y <= N; y++)
    for(int x = 1; x <= N; x++)
      b[y][x] = 0;
}

void randomBoard(int b[N+2][N+2]) {
  for(int y = 1; y <= N; y++)
    for(int x = 1; x <= N; x++)
      b[y][x] = rand() % 2;
}

void iterate() {
  nb = boards[(boardIndex + 1) % 2];
  int x, y, a, neighbors = 0;

  for (y = 1; y <= N; y++) {
    for (x = 1; x <= N; x++) {
      neighbors = board[y-1][x-1] + board[y-1][x] + board[y-1][x+1] + board[y][x-1] + board[y][x+1] + board[y+1][x-1] + board[y+1][x] + board[y+1][x+1];

      a = 0;

      if (board[y][x] == 0) {
        if (neighbors == 3) a = 1;
      } else {
        if (neighbors == 2 || neighbors == 3) a = 1;
      }

      nb[y][x] = a;
    }
  }

  boardIndex = (boardIndex + 1) % 2;
  board = boards[boardIndex];
}

int main() {
  randomBoard(boards[0]);
  emptyBoard(boards[1]);
  board = boards[0];

  int iterations = 1000;

  struct timespec start, end;
  clock_gettime(CLOCK_MONOTONIC_RAW, &start);

  for(int i = 0; i < iterations; i++) iterate();

  clock_gettime(CLOCK_MONOTONIC_RAW, &end);

  int delta = (end.tv_sec - start.tv_sec) * 1000000 + (end.tv_nsec - start.tv_nsec) / 1000;
  double t = delta / (float) iterations / 1000;
  printf("%0.2f\n", t);

  return 0;
}
