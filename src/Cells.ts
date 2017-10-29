import Cell from "./Cell";
import CellFactory from "./CellFactory";
import { Location } from "./Location";
import { PlayerName } from "./PlayerName";

export default class Cells {
  private cellFactory: CellFactory;
  private cells: [Cell];

  constructor(cellFactory?: CellFactory) {
    this.cellFactory = cellFactory || new CellFactory();
    this.cells = [
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
      this.cellFactory.spawn(),
    ];
  }

  public occupy(location: Location, playerName: PlayerName): void {
    this.cells[location].occupy(playerName);
  }
}
