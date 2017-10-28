import {} from "jest";
import Cell from "../src/Cell";
import Row from "../src/Row";

describe("Row", () => {
  it("checks cells for matching players", () => {
    const isWinner = jest.fn();
    const Mock = jest.fn<Cell>( () => ({
      hasSameOccupier: jest.fn(),
    }));
    const mockCell1 = new Mock();
    const mockCell2 = new Mock();
    const mockCell3 = new Mock();

    const row = new Row([mockCell1, mockCell2, mockCell3]);
    row.isWinner();

    expect(mockCell1.hasSameOccupier).toHaveBeenCalledWith([mockCell2, mockCell3]);
  });
});
