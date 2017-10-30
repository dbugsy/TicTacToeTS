import {} from "jest";
import Cell from "../src/Cell";
import CellFactory from "../src/CellFactory";
import Cells from "../src/Cells";
import { Location } from "../src/Location";
import { PlayerName } from "../src/PlayerName";

describe("Cells", () => {
  let cells: Cells;
  let mockCell: Cell;
  let mockPlayerName: PlayerName;
  let location: Location;

  beforeEach( () => {
    const MockCell = jest.fn<Cell>( () => ({
      hasSameOccupier: jest.fn(),
      occupy: jest.fn(),
    }));
    mockCell = new MockCell();

    const MockCellFactory = jest.fn<CellFactory>( () => ({
      spawn: jest.fn().mockReturnValue(mockCell),
    }));
    cells = new Cells(new MockCellFactory());

    location = Location.TOP_LEFT;

    const MockPlayerName = jest.fn<PlayerName>();
    mockPlayerName = new MockPlayerName();
  });

  it("occupies the cell", () => {
    cells.occupy(location, mockPlayerName);

    expect(mockCell.occupy).toHaveBeenCalledWith(mockPlayerName);
  });

  it("checks for a winner", () => {
    const numberOfWinningCombinations = Cells.WINNING_COMBINATIONS.length;

    cells.occupy(location, mockPlayerName);
    expect(mockCell.hasSameOccupier).toHaveBeenCalledTimes(numberOfWinningCombinations);
  });
});
