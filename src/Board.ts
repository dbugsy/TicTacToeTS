import Cell from "./Cell";
import Cells from "./Cells";
import { Location } from "./Location";
import Player from "./Player";
import { PlayerName } from "./PlayerName";

export default class Board {
  private currentPlayer: Player;
  private cells: Cells;

  constructor(cells: Cells, currentPlayer?: Player) {
    this.currentPlayer = currentPlayer || new Player(PlayerName.X);
    this.cells = cells;
  }

  public play(player: Player, location: Location): void {
    const targetCell = this.cells.cellAt(location);
    player.play(this.currentPlayer, targetCell);
  }
}
