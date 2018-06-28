import { ISurface } from "../../surface/interfaces/Surface.interface";
import { IToyStrings } from "../interfaces/ToyStrings.interface";
import { IOrientation } from "../orientation/interfaces/Orientation";
import { IPosition } from "../position/interfaces/Position.interface";
import { Toy } from "../Toy";
import { IRobot } from "./interfaces/Robot.interface";

export class Robot extends Toy implements IRobot {
  constructor(toyStrings: IToyStrings) {
    super(toyStrings);
  }

  public place(
    position: IPosition,
    orientation: IOrientation,
    surface?: ISurface
  ): boolean {
    return;
  }

  public report() {}

  public move(): boolean {
    return;
  }

  public left() {}

  public right() {}

  public changeOrientation(amount: number) {}
}