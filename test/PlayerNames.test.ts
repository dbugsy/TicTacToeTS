import {} from "jest";
import PlayerNames from "../src/PlayerNames";

describe("PlayerNames", () => {
  it("returns 'X'", () => {
    expect(PlayerNames.X).toBe("X");
  });

  it("returns 'O'", () => {
    expect(PlayerNames.O).toBe("O");
  });
});
