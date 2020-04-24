n = 1000
boardIndex = 0

def emptyBoard(n)
  Array.new(n + 2) {Array.new(n + 2, 0)}
end

def randomBoard(n)
  Array.new(n + 2) {Array.new(n + 2) {rand(0..1)}}
end

def iterate(n, boards, boardIndex)
  b = boards[boardIndex]
  nb = boards[(boardIndex + 1) % 2]

  y = 1
  c = 0
  while y <= n
    x = 1
    while x <= n
      c += 1
      neighbors =
        b[y - 1][x - 1] +
        b[y - 1][x] +
        b[y - 1][x + 1] +
        b[y][x - 1] +
        b[y][x + 1] +
        b[y + 1][x - 1] +
        b[y + 1][x] +
        b[y + 1][x + 1]

      a = 0
      if b[y][x] == 0
        if neighbors == 3
          a = 1
        end
      else
        if neighbors == 2 || neighbors == 3
          a = 1
        end
      end

      nb[y][x] = a

      x += 1
    end
    y += 1
  end

  return (boardIndex + 1) % 2
end

boards = Array.new(2) {randomBoard(n)}

iterations = 100

t = Time.now.to_f

while iterations > 0
  boardIndex = iterate(n, boards, boardIndex)
  iterations -= 1
end

t = Time.now.to_f - t
puts("%0.2f" % [t])
