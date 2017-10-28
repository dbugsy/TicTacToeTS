import Turn from "../src/Turn";
import Board from "./Board";
import { Location } from "./Location";
import Player from "./Player";

export default class Game {
  private turn: Turn;
  private board: Board;

  constructor(board?: Board, turn?: Turn) {
    this.turn = turn || new Turn();
    this.board = board || new Board();
  }

  public play(player: Player, location: Location): void {
    const targetCell = this.board.cellAt(location);
    this.turn.play(player, targetCell);
  }
}
