import {} from "jest";
import Cell from "../src/Cell";

describe("Cell", () => {
  it("does not allow player to occupy if already occupied", () => {
    const cell = new Cell();
    const mockOccupant = {};
    const mockChallenger = {};
    cell.occupy(mockOccupant);

    expect( () => cell.occupy(mockChallenger)).toThrowError(Cell.OCCUPIED_CELL_ERROR_MESSAGE);
  });
});
