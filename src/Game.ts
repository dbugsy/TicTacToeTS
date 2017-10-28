import Board from "./Board";
import Cell from "./Cell";
import { Location } from "./Location";
import Player from "./Player";
import { PlayerName } from "./PlayerName";

export default class Game {
  private currentPlayer: Player;
  private board: Board;

  constructor(board: Board, currentPlayer?: Player) {
    this.currentPlayer = currentPlayer || new Player(PlayerName.X);
    this.board = board;
  }

  public play(player: Player, location: Location): void {
    const targetCell = this.board.cellAt(location);
    player.play(this.currentPlayer, targetCell);
  }
}
