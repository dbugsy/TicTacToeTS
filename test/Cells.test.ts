import {} from "jest";
import Cell from "../src/Cell";
import Cells from "../src/Cells";
import { Location } from "../src/Location";
import { PlayerName } from "../src/PlayerName";

describe("Cells", () => {
  it("occupies the cell", () => {
    const MockCell = jest.fn<Cell>( () => ({
      occupy: jest.fn(),
    }));
    const mockCell = new MockCell();

    const MockCellFactory = jest.fn<CellFactory>( () => ({
      spawn: jest.fn().mockReturnValue(mockCell),
    }));
    const cells = new Cells(new MockCellFactory());

    const MockPlayerName = jest.fn<PlayerName>();
    const mockPlayerName = new MockPlayerName();

    const location = Location.TOP_LEFT;

    cells.occupy(location, mockPlayerName);
    expect(mockCell.occupy).toHaveBeenCalledWith(mockPlayerName);
  });
});
