import Player from "./Player";
const occupiedCellErrorMessage = "Bad move: Cell is already occupied";

export default class Cell {
  private occupier: Player;

  public static get OCCUPIED_CELL_ERROR_MESSAGE(): string {
    return occupiedCellErrorMessage;
  }

  public occupy(player: Player): void {
    if (this.occupier) {
      throw new Error(Cell.OCCUPIED_CELL_ERROR_MESSAGE);
    }
    this.occupier = player;
  }
}
