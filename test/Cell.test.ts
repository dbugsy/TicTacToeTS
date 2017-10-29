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
    cell.occupy(mockOccupant);
  });

  it("does not allow player to occupy if already occupied", () => {
    expect( () => cell.occupy(mockChallenger)).toThrowError(Cell.OCCUPIED_CELL_ERROR_MESSAGE);
  });

  it("ends the game if same occupier as neighbours", () => {
    const neighbour1 = new Cell();
    const neighbour2 = new Cell();

    neighbour1.occupy(mockOccupant);
    neighbour2.occupy(mockOccupant);

    expect( () => cell.hasSameOccupier([neighbour1, neighbour2])).toThrow("Game won");
  });
});
