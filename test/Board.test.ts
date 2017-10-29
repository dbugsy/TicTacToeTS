import {} from "jest";
import Board from "../src/Board";
import Cells from "../src/Cells";
import {Location} from "../src/Location";
import {PlayerName} from "../src/PlayerName";

describe("Board", () => {
  it("occupies cells", () => {
    const MockCells = jest.fn<Cells>( () => ({
      occupy: jest.fn(),
    }));
    const mockCells = new MockCells();

    const MockPlayerName = jest.fn<PlayerName>();
    const mockPlayerName = new MockPlayerName();

    const MockLocation = jest.fn<Location>();
    const mockLocation = new MockLocation();

    const board = new Board(mockCells);

    board.play(mockPlayerName, mockLocation);

    expect(mockCells.occupy).toHaveBeenCalledWith(mockLocation, mockPlayerName);
  });
});
