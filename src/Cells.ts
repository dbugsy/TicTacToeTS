import Cell from "./Cell";
import { Location } from "./Location";
export default class Cells {
  private all: [Cell];

  constructor() {
    this.all = [
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
    return this.all[location];
  }
}
