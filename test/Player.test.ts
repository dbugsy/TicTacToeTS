import {} from "jest";
import Player from "../src/Player";
import PlayerNames from "../src/PlayerNames";

describe("Player", () => {
  let cell: any;
  let currentPlayer: Player;
  let player: Player;

  beforeEach( () => {
    cell = {};
    player = new Player(PlayerNames.X);
  });

  it("will not play if it is not their turn", () => {
    currentPlayer = new Player(PlayerNames.O);

    expect( () => player.play(currentPlayer, cell)).toThrow(new Error (Player.OUT_OF_TURN_ERROR_MESSAGE));
  });

  it("will play if it is their turn", () => {
    currentPlayer = new Player(PlayerNames.X);
    const occupy = jest.fn();
    cell = {
      occupy,
    };

    player.play(currentPlayer, cell);
    expect(occupy.mock.calls[0][0]).toBe(player);
  });
});
