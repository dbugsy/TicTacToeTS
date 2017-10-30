import { PlayerName } from "./PlayerName";

const occupiedCellErrorMessage = "Bad move: Cell is already occupied";

export default class Cell {
  private occupier: PlayerName;

  public static get OCCUPIED_CELL_ERROR_MESSAGE(): string {
    return occupiedCellErrorMessage;
  }

  public occupy(playerName: PlayerName): void {
    if (this.occupier) {
      throw new Error(Cell.OCCUPIED_CELL_ERROR_MESSAGE);
    }
    this.occupier = playerName;
  }

  public hasSameOccupier(neighbours: [Cell]) {
    if (this._hasSameOccupant(neighbours[0]) && this._hasSameOccupant(neighbours[1])) {
      throw new Error("Game won");
    }
  }

  private _hasSameOccupant(other: Cell): boolean {
    if (!this.occupier) { return false; }
    return this.occupier === other.occupier;
  }
}
