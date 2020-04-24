package main

import (
	"fmt"
	"math/rand"
	"time"
)

type Board struct {
	Rows  int
	Cols  int
	Board [][]int
}

func EmptyBoard(r, c int) *Board {
	b := make([][]int, r+2)
	for i := range b {
		b[i] = make([]int, c+2)
	}

	return &Board{Rows: r, Cols: c, Board: b}
}

func RandomBoard(r, c int) *Board {
	b := EmptyBoard(r, c)

	for y := 1; y <= r; y++ {
		for x := 1; x <= c; x++ {
			b.Board[y][x] = rand.Intn(2)
		}
	}

	return b
}

func (b *Board) Print() {
	for y := 1; y <= b.Rows; y++ {
		for x := 1; x <= b.Cols; x++ {
			fmt.Printf("%d", b.Board[y][x])
		}
		fmt.Println()
	}
}

type World struct {
	Cols   int
	Rows   int
	Boards []*Board
	Index  int
	Board  *Board
}

func NewWorld(r, c int) *World {
	//a := EmptyBoard(r, c)
	a := RandomBoard(r, c)
	b := EmptyBoard(r, c)

	return &World{
		Rows:   r,
		Cols:   c,
		Boards: []*Board{a, b},
		Index:  0,
		Board:  a,
	}
}

func (w *World) Iterate() {
	nb := w.Boards[(w.Index+1)%2].Board
	b := w.Board.Board

	var neighbors, a int
	for y := 1; y <= w.Rows; y++ {
		for x := 1; x <= w.Cols; x++ {
			neighbors = b[y-1][x-1] + b[y-1][x] + b[y-1][x+1] + b[y][x-1] + b[y][x+1] + b[y+1][x-1] + b[y+1][x] + b[y+1][x+1]

			a = 0
			if b[y][x] == 0 {
				if neighbors == 3 {
					a = 1
				}
			} else {
				if neighbors == 2 || neighbors == 3 {
					a = 1
				}
			}

			nb[y][x] = a
		}
	}

	w.Index = (w.Index + 1) % 2
	w.Board = w.Boards[w.Index]
}

func main() {
	w := NewWorld(1000, 1000)

	iterations := 1000

	t := time.Now().UnixNano() / int64(time.Millisecond)

	for i := 0; i < iterations; i++ {
		w.Iterate()
	}

	t = time.Now().UnixNano()/int64(time.Millisecond) - t

	fmt.Printf("%0.2f\n", float64(t)/float64(iterations))
}
