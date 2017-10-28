import Cell from "./Cell";
import Player from "./Player";
import { PlayerName } from "./PlayerName";

export default class Turn {
  public play(player: Player, targetCell: Cell): void {
    player.play(PlayerName.X, targetCell);
  }
}
