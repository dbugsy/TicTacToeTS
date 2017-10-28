import {} from "jest";
import { PlayerName } from "../src/PlayerName";
import Turn from "../src/Turn";

describe("Turn", () => {
  let turn: Turn;

  beforeEach( () => {
    turn = new Turn();
  });

  it("starts with turn X", () => {
    expect(turn.playerName()).toBe(PlayerName.X);
  });

  it("toggles the turn to O", () => {
    turn.playerName();
    expect(turn.playerName()).toBe(PlayerName.O);
  });

  it("toggles the turn to X again", () => {
    turn.playerName();
    turn.playerName();

    expect(turn.playerName()).toBe(PlayerName.X);
  });
});
