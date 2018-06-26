import { ISurface } from "../../../surface/interfaces/Surface.interface";
import { IToyManipulatable } from "../../interfaces/ToyManipulatable.interface";
import { IPosition } from "../../position/interfaces/Position.interface";
import { ToyStrings } from "../../ToyStrings";
import { BaseController } from "../BaseController";
import { IPositionController } from "./interfaces/PositionController.interface";

/**
 * PositionController gives a toy the ability to change positions.
 *
 * @export
 * @class PositionController
 * @extends {BaseController}
 */
export class PositionController<
  P extends IPosition = IPosition,
  S extends ISurface = ISurface
> extends BaseController<IToyManipulatable> implements IPositionController<P> {
  constructor(toy: IToyManipulatable) {
    super(toy);
  }

  public place(position: P) {
    const positionSet = this.setPosition(position);

    if (positionSet) {
      this.toy.isPlacedFlag = true;
    }

    return positionSet;
  }

  public isPlaced(): boolean {
    if (!this.toy.isPlacedFlag) {
      throw new Error(ToyStrings.missingEnvironment);
    }

    return true;
  }

  public setPosition(position: P): boolean {
    const validPosition = this.validatePosition(position);
    const validOrientation = this.toy.validateOrientation(position);

    if (validPosition && validOrientation) {
      this.toy.position = position;
    }

    return validPosition && validOrientation;
  }

  public validatePosition(position: P): boolean {
    let isValid = false;

    if (this.toy.surface) {
      isValid = true;
    }

    return isValid && this.toy.surface.hasSurfaceAtPos(position);
  }
}
