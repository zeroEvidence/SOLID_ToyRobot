import { ISurface } from "../../entities/surface/interfaces/Surface.interface";
import { IToy } from "../../entities/toy/interfaces/Toy.interface";
import { ICommand } from "../../interfaces/Command.interface";

export interface IUserInterfaceAdapterFactory {
  createUIAdapter(UIType: number, toy: IToy, surface: ISurface): ICommand;
}
