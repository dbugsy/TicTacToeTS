import {} from "jest";
import Cell from "../src/Cell";
import Player from "../src/Player";
import { PlayerName } from "../src/PlayerName";
import Turn from "../src/Turn";

describe("Turn", () => {
  it("starts with turn X", () => {
    const turn = new Turn();

    const MockCell = jest.fn<Cell>();
    const targetCell = new MockCell();

    const MockPlayer = jest.fn<Player>( () => ({
      play: jest.fn(),
    }));
    const mockPlayer = new MockPlayer();

    turn.play(mockPlayer, targetCell);

    expect(mockPlayer.play).toHaveBeenCalledWith(PlayerName.X, targetCell);
  });
});
