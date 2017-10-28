import Turn from "../src/Turn";
import Board from "./Board";
import { Location } from "./Location";

export default class Game {
  private turn: Turn;
  private board: Board;

  constructor(board?: Board, turn?: Turn) {
    this.turn = turn || new Turn();
    this.board = board || new Board();
  }

  public play(location: Location): void {
    const currentPlayer = this.turn.playerName();
    this.board.play(currentPlayer, location);
  }
}
