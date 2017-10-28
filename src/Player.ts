import Cell from "./Cell";
const outOfTurnErrorMessage = "Wrong turn: it is not this player's turn.";

export default class Player {
  private name: string;

  public static get OUT_OF_TURN_ERROR_MESSAGE(): string {
    return outOfTurnErrorMessage;
  }

  constructor(name: string) {
    this.name = name;
  }

  public play(turn: Player, cell: Cell): void {
    if (this._isDifferent(turn)) {
      throw new Error(Player.OUT_OF_TURN_ERROR_MESSAGE);
    }
    cell.occupy(this);
  }

  private _isDifferent(other: Player): boolean {
    return !(this.name === other.name);
  }

}
