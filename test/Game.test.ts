import {} from "jest";
import Board from "../src/Board";
import Cell from "../src/Cell";
import Game from "../src/Game";
import {Location} from "../src/Location";
import Player from "../src/Player";
import { PlayerName } from "../src/PlayerName";
import Turn from "../src/Turn";

describe("Game", () => {
  it("sends a player and a cell to a turn", () => {
    const MockCell = jest.fn<Cell>();
    const mockCell = new MockCell();

    const cellAt = jest.fn().mockReturnValue(mockCell);
    const MockBoard = jest.fn<Board>( () => ({
      cellAt,
    }));
    const mockBoard = new MockBoard();

    const MockPlayer = jest.fn<Player>();
    const mockPlayer = new MockPlayer();

    const MockTurn = jest.fn<Turn>( () => ({
      play: jest.fn(),
    }));
    const mockTurn = new MockTurn();

    const game = new Game (mockBoard, mockTurn);

    game.play(mockPlayer, Location.TOP_LEFT);

    expect(mockTurn.play).toHaveBeenCalledWith(mockPlayer);
  });
});
