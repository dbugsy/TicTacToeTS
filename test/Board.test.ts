import {} from "jest";
import Board from "../src/Board";
import Cell from "../src/Cell";
import { Location } from "../src/Location";

describe("Board", () => {
  it("returns the cell", () => {
    const cells = new Board();
    expect(cells.cellAt(Location.TOP_LEFT)).toBeInstanceOf(Cell);
  });
});
