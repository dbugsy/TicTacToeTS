import {} from "jest";
import Cell from "../src/Cell";
import { PlayerName } from "../src/PlayerName";

describe("Cell", () => {
  let cell: Cell;
  let mockOccupant: PlayerName;
  let mockChallenger: PlayerName;

  beforeEach( () => {
    const MockPlayer = jest.fn<PlayerName>();
    cell = new Cell();
    mockOccupant = new MockPlayer();
    mockChallenger = new MockPlayer();
  });

  it("does not allow player to occupy if already occupied", () => {
    cell.occupy(mockOccupant);
    expect( () => cell.occupy(mockChallenger)).toThrowError(Cell.OCCUPIED_CELL_ERROR_MESSAGE);
  });

  describe("checking if the game is over", () => {
    let neighbour1: Cell;
    let neighbour2: Cell;

    beforeEach( () => {
      neighbour1 = new Cell();
      neighbour2 = new Cell();
    });

    it("does not end the game if any of the cells are not occupied", () => {
      expect( () => cell.hasSameOccupier([neighbour1, neighbour2])).not.toThrowError();
    });

    it("does not end the game if neighbours have different occupier", () => {
      cell.occupy(mockOccupant);
      neighbour1.occupy(mockChallenger);
      neighbour2.occupy(mockChallenger);

      expect( () => cell.hasSameOccupier([neighbour1, neighbour2])).not.toThrowError();
    });

    it("wins the game if same occupier as neighbours", () => {
      cell.occupy(mockOccupant);
      const neighbour1 = new Cell();
      const neighbour2 = new Cell();

      neighbour1.occupy(mockOccupant);
      neighbour2.occupy(mockOccupant);

      expect( () => cell.hasSameOccupier([neighbour1, neighbour2])).toThrow("Game won");
    });

    it("ends the game with a draw if all cells are occupied", () => {
      cell.occupy(mockOccupant);
      const neighbour1 = new Cell();
      const neighbour2 = new Cell();

      neighbour1.occupy(mockOccupant);
      neighbour2.occupy(mockOccupant);

      expect( () => cell.isDraw([neighbour1, neighbour2])).toThrow("Game over - it's a draw");
    });

    it("does not end the game as a draw if any cells are not occupied", () => {
      const neighbour1 = new Cell();
      const neighbour2 = new Cell();
      expect( () => cell.isDraw([neighbour1, neighbour2])).not.toThrowError();
    });
  });
});
