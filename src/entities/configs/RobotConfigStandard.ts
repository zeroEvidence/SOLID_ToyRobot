import { IToyConfig } from "../toy/interfaces/ToyConfig.interface";
import { ToyRules } from "../toy/ToyRules";

export const RobotConfigStandard: IToyConfig = {
  rules: [
    ToyRules.isSurfaceMountable,
    ToyRules.isReportable,
    ToyRules.isPositionable,
    ToyRules.isOrientable,
    ToyRules.isMoveable
  ],
  strings: {
    missingEnvironment: "Boop! boop! Error: place me first."
  }
};
