import {} from "jest";
import Player from "../src/Player";
import {PlayerName} from "../src/PlayerName";

describe("Player", () => {
  let cell: any;
  let currentPlayer: PlayerName;
  let player: Player;

  beforeEach( () => {
    cell = {};
    player = new Player(PlayerName.X);
  });

  it("will not play if it is not their turn", () => {
    currentPlayer = PlayerName.O;

    expect( () => player.play(currentPlayer, cell)).toThrow(new Error (Player.OUT_OF_TURN_ERROR_MESSAGE));
  });

  it("will play if it is their turn", () => {
    currentPlayer = PlayerName.X;
    const occupy = jest.fn();
    cell = {
      occupy,
    };

    player.play(currentPlayer, cell);
    expect(occupy.mock.calls[0][0]).toBe(player);
  });
});
