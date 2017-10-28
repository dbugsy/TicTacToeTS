import {} from "jest";
import Cell from "../src/Cell";

describe("Cell", () => {
  it("", () => {
    const cell = new Cell();
    const mockPlayer = {};

    expect(cell.occupy(mockPlayer)).toThrowError("Bad move: Cell is already occupied");
  });
});
