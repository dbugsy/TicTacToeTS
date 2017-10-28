import {} from "jest";
import Board from "../src/Board";
import Cell from "../src/Cell";
import Game from "../src/Game";
import {Location} from "../src/Location";
import Player from "../src/Player";

describe("Game", () => {
  it("sends a move to a player", () => {
    const MockCell = jest.fn<Cell>();
    const mockCell = new MockCell();

    const cellAt = jest.fn().mockReturnValue(mockCell);
    const MockBoard = jest.fn<Board>( () => ({
      cellAt,
    }));
    const mockBoard = new MockBoard();

    const MockPlayer = jest.fn<Player>( () => (
      {play: jest.fn()}
    ));

    const mockPlayer = new MockPlayer();
    const currentPlayer = new MockPlayer();

    const game = new Game (mockBoard, currentPlayer);

    game.play(mockPlayer, Location.TOP_LEFT);

    expect(mockPlayer.play).toHaveBeenCalledWith(currentPlayer, mockCell);
  });
});
