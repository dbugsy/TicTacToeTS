import { PlayerName } from "./PlayerName";

export default class Turn {

  private isPlayerTurnX: boolean;

  constructor() {
    this.isPlayerTurnX = false;
  }

  public playerName(): PlayerName {
    this._toggleTurn();
    return this._playerTurn();
  }

  private _toggleTurn(): void {
    this.isPlayerTurnX = !this.isPlayerTurnX;
  }

  private _playerTurn(): PlayerName {
    if (this.isPlayerTurnX) {
      return PlayerName.X;
    }
    return PlayerName.O;
  }
}
