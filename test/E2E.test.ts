import {} from "jest";
import Cells from "../src/Cells";
import Game from "../src/Game";
import {Location} from "../src/Location";

describe("Playing TicTacToe,", () => {
  let game: Game;

  beforeEach( () => {
    game = new Game();
  });

  describe("game is a draw", () => {
    it("when every cell is occupied", () => {
      game.play(Location.TOP_LEFT); // X
      game.play(Location.TOP_CENTRE); // O
      game.play(Location.TOP_RIGHT); // X
      game.play(Location.CENTRE_LEFT); // O
      game.play(Location.CENTRE_RIGHT); // X
      game.play(Location.TRUE_CENTRE); // O
      game.play(Location.BOTTOM_LEFT); // X
      game.play(Location.BOTTOM_RIGHT); // O

      expect( () => game.play(Location.BOTTOM_CENTRE)).toThrow("Game over - it's a draw");
    });
  });

  describe("game is won", () => {
    Cells.WINNING_COMBINATIONS.forEach( (combo: Location[]) => {
      const allCells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
      const otherMoves = allCells.filter( (loc) => !combo.includes(loc));
      it(`when ${combo} is achieved`, () => {
        game.play(combo[0]);
        game.play(otherMoves[0]);
        game.play(combo[1]);
        game.play(otherMoves[1]);
        expect(() => game.play(combo[2])).toThrow("Game won");
      });
    });

  });
});
