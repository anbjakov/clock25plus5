import { createContext } from "react";
interface IBrakeContext {
  brakeDuration: number;
  disableBrake?: () => void;
  isBrakeDisable: boolean;
  increaseBrake?: () => void;
  decreaseBrake?: () => void;
  resetBrake?: () => void;
}
const defaultBrake = {
  brakeDuration: 15,
  isBrakeDisable: false,
};

const BreakContext = createContext<IBrakeContext>(defaultBrake);
export default BreakContext;
