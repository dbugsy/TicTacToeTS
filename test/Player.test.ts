import {} from "jest";
import Player from "../src/Player";
import {PlayerName} from "../src/PlayerName";

describe("Player", () => {
  let currentPlayer: PlayerName;
  let player: Player;

  beforeEach( () => {
    player = new Player(PlayerName.X);
  });

  it("will not play if it is not their turn", () => {
    currentPlayer = PlayerName.O;

    expect( () => player.checkTurn(currentPlayer)).toThrow(Player.OUT_OF_TURN_ERROR_MESSAGE);
  });

  it("will play if it is their turn", () => {
    currentPlayer = PlayerName.X;

    player.checkTurn(currentPlayer);
    expect( () => player.checkTurn(currentPlayer)).not.toThrow(Player.OUT_OF_TURN_ERROR_MESSAGE);
  });
});
