import { PlayerName } from "./PlayerName";

const occupiedCellErrorMessage = "Bad move: Cell is already occupied";

export default class Cell {
  private occupier: PlayerName;

  public static get OCCUPIED_CELL_ERROR_MESSAGE(): string {
    return occupiedCellErrorMessage;
  }

  public occupy(player: PlayerName): void {
    if (this.occupier) {
      throw new Error(Cell.OCCUPIED_CELL_ERROR_MESSAGE);
    }
    this.occupier = player;
  }

  public hasSameOccupier(neighbours: [Cell]) {
    throw new Error("Game won");
  }
}
