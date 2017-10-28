const playerNames = {
  O: "O",
  X: "X",
};

export default class PlayerNames {
  public static get X(): string {
    return playerNames.X;
  }

  public static get O(): string {
    return playerNames.O;
  }
}
