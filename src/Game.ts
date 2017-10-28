import Board from "./Board";
import Cell from "./Cell";
import { Location } from "./Location";
import Player from "./Player";
import { PlayerName } from "./PlayerName";

export default class Game {
  private currentTurn: PlayerName;
  private board: Board;

  constructor(board: Board, currentTurn?: PlayerName) {
    this.currentTurn = currentTurn || PlayerName.X;
    this.board = board;
  }

  public play(player: Player, location: Location): void {
    const targetCell = this.board.cellAt(location);
    player.play(this.currentTurn, targetCell);
  }
}
