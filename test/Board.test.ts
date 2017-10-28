import {} from "jest";
import Board from "../src/Board";
import Cell from "../src/Cell";
import Cells from "../src/Cells";
import {Location} from "../src/Location";
import Player from "../src/Player";

describe("Board", () => {
  it("sends a move to a player", () => {
    const MockCell = jest.fn<Cell>();
    const mockCell = new MockCell();

    const cellAt = jest.fn().mockReturnValue(mockCell);
    const MockCells = jest.fn<Cells>( () => ({
      cellAt,
    }));
    const mockCells = new MockCells();

    const MockPlayer = jest.fn<Player>( () => (
      {play: jest.fn()}
    ));

    const mockPlayer = new MockPlayer();
    const currentPlayer = new MockPlayer();

    const board = new Board (mockCells, currentPlayer);

    board.play(mockPlayer, Location.TOP_LEFT);

    expect(mockPlayer.play).toHaveBeenCalledWith(currentPlayer, mockCell);
  });
});
