import Cell from "./Cell";

export default class CellFactory {
  public spawn(): Cell {
    return new Cell();
  }
}
