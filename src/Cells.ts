import Cell from "./Cell";
import CellFactory from "./CellFactory";
import { Location } from "./Location";
import { PlayerName } from "./PlayerName";

const winningCombinations = [
  [Location.TOP_LEFT, Location.TOP_CENTRE, Location.TOP_RIGHT],
  [Location.CENTRE_LEFT, Location.TRUE_CENTRE, Location.CENTRE_RIGHT],
  [Location.BOTTOM_LEFT, Location.BOTTOM_CENTRE, Location.BOTTOM_RIGHT],
  [Location.TOP_LEFT, Location.CENTRE_LEFT, Location.BOTTOM_LEFT],
  [Location.TOP_CENTRE, Location.TRUE_CENTRE, Location.BOTTOM_CENTRE],
  [Location.TOP_RIGHT, Location.CENTRE_RIGHT, Location.BOTTOM_RIGHT],
  [Location.TOP_LEFT, Location.TRUE_CENTRE, Location.BOTTOM_RIGHT],
  [Location.BOTTOM_LEFT, Location.TRUE_CENTRE, Location.TOP_RIGHT],
];

export default class Cells {
  private cellFactory: CellFactory;
  private cells: [Cell];

  public static get WINNING_COMBINATIONS(): Location[][] {
    return winningCombinations;
  }

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
    this._checkWinner();
    this._isDraw();
  }

  private _checkWinner(): void {
    Cells.WINNING_COMBINATIONS.forEach( (combo) => {
      const cell1 = this.cells[combo[0]];
      const cell2 = this.cells[combo[1]];
      const cell3 = this.cells[combo[2]];
      cell1.hasSameOccupier([cell2, cell3]);
    });
  }

  private _isDraw(): void {
    this.cells[0].isDraw(this.cells);
  }
}
