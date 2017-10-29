import Cells from "./Cells";
import { Location } from "./Location";
import { PlayerName } from "./PlayerName";

export default class Board {
  private cells: Cells;

  constructor(cells?: Cells) {
    this.cells = cells || new Cells();
  }
  public play(player: PlayerName, location: Location): void {
    this.cells.occupy(player, location);
  }
}
