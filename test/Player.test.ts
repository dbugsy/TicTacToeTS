import {} from "jest";
import Player from "../src/Player";
import PlayerNames from "../src/PlayerNames";

describe("Player", () => {
  it("will not play if it is not their turn", () => {
    const player = new Player(PlayerNames.X);
    const playerTurn = new Player(PlayerNames.O);
    expect( () => player.play(playerTurn)).toThrow(new Error (Player.OUT_OF_TURN_ERROR_MESSAGE));
  });
});
