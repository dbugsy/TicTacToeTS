import Cell from "./Cell";
import { Location } from "./Location";
export default class Board {
  private cells: [Cell];

  constructor() {
    this.cells = [
      new Cell(),
      new Cell(),
      new Cell(),
      new Cell(),
      new Cell(),
      new Cell(),
      new Cell(),
      new Cell(),
      new Cell(),
    ];
  }

  public cellAt(location: Location): Cell {
    return this.cells[location];
  }
}
