import Cell from "./Cell";
import CellFactory from "./CellFactory";
import { Location } from "./Location";
import { PlayerName } from './PlayerName';

export default class Cells {
  private cells: [Cell];

  constructor(cellFactory?: CellFactory) {
    this.cells = [
      cellFactory.spawn(),
      cellFactory.spawn(),
      cellFactory.spawn(),
      cellFactory.spawn(),
      cellFactory.spawn(),
      cellFactory.spawn(),
      cellFactory.spawn(),
      cellFactory.spawn(),
      cellFactory.spawn(),
    ];
  }

  public occupy(location: Location, playerName: PlayerName): void {
    this.cells[location].occupy(playerName);
  }
}
