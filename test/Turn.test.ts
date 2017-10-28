import {} from "jest";
import Cell from "../src/Cell";
import Player from "../src/Player";
import { PlayerName } from "../src/PlayerName";
import Turn from "../src/Turn";

describe("Turn", () => {
  let turn: Turn;
  let mockPlayer: Player;
  let targetCell: Cell;

  beforeEach( () => {
    turn = new Turn();

    const MockCell = jest.fn<Cell>();
    targetCell = new MockCell();

    const MockPlayer = jest.fn<Player>( () => ({
      play: jest.fn(),
    }));
    mockPlayer = new MockPlayer();
  });

  it("starts with turn X", () => {
    turn.play(mockPlayer, targetCell);

    expect(mockPlayer.play).toHaveBeenCalledWith(PlayerName.X, targetCell);
  });

  it("toggles the turn to O", () => {
    turn.play(mockPlayer, targetCell);
    turn.play(mockPlayer, targetCell);

    expect(mockPlayer.play).lastCalledWith(PlayerName.O, targetCell);
  });

  it("toggles the turn to X again", () => {
    turn.play(mockPlayer, targetCell);
    turn.play(mockPlayer, targetCell);
    turn.play(mockPlayer, targetCell);

    expect(mockPlayer.play).lastCalledWith(PlayerName.X, targetCell);
  });
});
