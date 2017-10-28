import {} from "jest";
import Cell from "../src/Cell";
import Cells from "../src/Cells";
import { Location } from "../src/Location";

describe("Cells", () => {
  it("returns the cell", () => {
    const cells = new Cells();
    expect(cells.cellAt(Location.TOP_LEFT)).toBeInstanceOf(Cell);
  });
});
