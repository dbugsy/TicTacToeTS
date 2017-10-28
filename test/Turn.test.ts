import {} from "jest";
import Player from "../src/Player";
import { PlayerName } from "../src/PlayerName";
import Turn from "../src/Turn";

describe("Turn", () => {
  let turn: Turn;
  let mockPlayer: Player;

  beforeEach( () => {
    turn = new Turn();

    const MockPlayer = jest.fn<Player>( () => ({
      checkTurn: jest.fn(),
    }));
    mockPlayer = new MockPlayer();
  });

  it("starts with turn X", () => {
    turn.play(mockPlayer);

    expect(mockPlayer.checkTurn).toHaveBeenCalledWith(PlayerName.X);
  });

  it("toggles the turn to O", () => {
    turn.play(mockPlayer);
    turn.play(mockPlayer);

    expect(mockPlayer.checkTurn).lastCalledWith(PlayerName.O);
  });

  it("toggles the turn to X again", () => {
    turn.play(mockPlayer);
    turn.play(mockPlayer);
    turn.play(mockPlayer);

    expect(mockPlayer.checkTurn).lastCalledWith(PlayerName.X);
  });
});
