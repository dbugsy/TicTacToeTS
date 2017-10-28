import {PlayerName} from "./PlayerName";
const outOfTurnErrorMessage = "Wrong turn: it is not this player's turn.";

export default class Player {
  private name: PlayerName;

  public static get OUT_OF_TURN_ERROR_MESSAGE(): string {
    return outOfTurnErrorMessage;
  }

  constructor(name: PlayerName) {
    this.name = name;
  }

  public checkTurn(turn: PlayerName): void {
    if (this._isDifferent(turn)) {
      throw new Error(Player.OUT_OF_TURN_ERROR_MESSAGE);
    }
  }

  private _isDifferent(otherName: PlayerName): boolean {
    return !(this.name === otherName);
  }

}
