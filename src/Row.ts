import Cell from "./Cell";

export default class Row {
  private cells: [Cell];

  constructor(cells: [Cell]) {
    this.cells = cells;
  }

  public isWinner(): void {
    this.cells[0].hasSameOccupier([this.cells[1], this.cells[2]]);
  }
}
