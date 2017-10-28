import {} from "jest";
import {Location} from "../src/Location";

describe("Location", () => {
  describe("returns an index for each position", () => {
    it("TOP_LEFT is 0", () => {
      expect(Location.TOP_LEFT).toBe(0);
    });

    it("TOP_CENTRE is 1", () => {
      expect(Location.TOP_CENTRE).toBe(1);
    });

    it("TOP_RIGHT is 2", () => {
      expect(Location.TOP_RIGHT).toBe(2);
    });

    it("CENTRE_LEFT is 3", () => {
      expect(Location.CENTRE_LEFT).toBe(3);
    });

    it("TRUE_CENTRE is 4", () => {
      expect(Location.TRUE_CENTRE).toBe(4);
    });

    it("CENTRE_RIGHT is 5", () => {
      expect(Location.CENTRE_RIGHT).toBe(5);
    });

    it("BOTTOM_LEFT is 6", () => {
      expect(Location.BOTTOM_LEFT).toBe(6);
    });

    it("BOTTOM_CENTRE is 7", () => {
      expect(Location.BOTTOM_CENTRE).toBe(7);
    });

    it("BOTTOM_RIGHT is 8", () => {
      expect(Location.BOTTOM_RIGHT).toBe(8);
    });
  });
});
