import {} from "jest";
import Board from "../src/Board";
import Game from "../src/Game";
import {Location} from "../src/Location";
import { PlayerName } from "../src/PlayerName";
import Turn from "../src/Turn";

describe("Game", () => {
  it("sends a player and a location to the board", () => {

    const MockBoard = jest.fn<Board>( () => ({
      play: jest.fn(),
    }));
    const mockBoard = new MockBoard();

    const MockPlayerName = jest.fn<PlayerName>();
    const mockPlayerName = new MockPlayerName();

    const MockLocation = jest.fn<Location>();
    const mockLocation = new MockLocation();

    const MockTurn = jest.fn<Turn>( () => ({
      playerName: jest.fn().mockReturnValue(mockPlayerName),
    }));
    const mockTurn = new MockTurn();

    const game = new Game (mockBoard, mockTurn);

    game.play(mockLocation);

    expect(mockTurn.playerName).toHaveBeenCalled();
    expect(mockBoard.play).toHaveBeenCalledWith(mockPlayerName, mockLocation);
  });
});
