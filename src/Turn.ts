import Player from "./Player";
import { PlayerName } from "./PlayerName";

export default class Turn {

  private isPlayerTurnX: boolean;

  constructor() {
    this.isPlayerTurnX = true;
  }

  public play(player: Player): void {
    player.checkTurn(this._playerTurn());
    this._toggleTurn();
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
