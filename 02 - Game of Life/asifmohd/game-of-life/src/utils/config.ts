export const config = {
  board: {
    row: 50,
    column: 50,
    verticalPadding: 7,
    hoirizontalPadding: 3,
  },
  cells: {
    size: 15,
    aliveColor: "#212121",
    deadColor: "#f1f1f1",
    border: "solid 1px black",
  },
  controls: {
    gameDescription:
      "The game is a zero-player game, meaning that its evolution is determined by its initial state, requiring no further input. One interacts with the Game of Life by creating an initial configuration and observing how it evolves. It is Turing complete and can simulate a universal constructor or any other Turing machine. Simply click on the grid to set intial state and click play!",
    startBtnColor: "#a3dc63",
    stopBtnColor: "#ff4343",
    showSettingsColor: "#eeee",
    hideSettingsColor: "#ebd74b",
  },
}
