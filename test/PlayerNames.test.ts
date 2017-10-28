import {} from "jest";
import {PlayerName} from "../src/PlayerName";

describe("PlayerNames", () => {
  it("returns 'X'", () => {
    expect(PlayerName.X).toBe(0);
  });

  it("returns 'O'", () => {
    expect(PlayerName.O).toBe(1);
  });
});
