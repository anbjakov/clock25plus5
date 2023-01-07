import { useState } from "react";
import BreakContext from "./BreakContext";

type BreakProviderProps = {
  children?: React.ReactNode;
};
const BreakProvider = ({ children }: BreakProviderProps) => {
  const DEFAULT_BRAKE = 5;
  const MAX_BRAKE_LENGTH = 60;
  const MIN_BRAKE_LENGTH = 1;
  const [brakeDuration, setBrakeDuration] = useState<number>(DEFAULT_BRAKE);
  const [isBrakeDisable, setBrakeDisable] = useState<boolean>(false);
  const increaseBrake = () => {
    setBrakeDuration((prevBrake) => {
      if (prevBrake + 1 > MAX_BRAKE_LENGTH) return MAX_BRAKE_LENGTH;
      return prevBrake + 1;
    });
  };
  const decreaseBrake = () => {
    setBrakeDuration((prevBrake) => {
      if (prevBrake - 1 <= MIN_BRAKE_LENGTH) return MIN_BRAKE_LENGTH;
      return prevBrake - 1;
    });
  };
  const resetBrake = () => {
    setBrakeDuration(DEFAULT_BRAKE);
    setBrakeDisable(false);
  };
  const disableBrake = () => {
    setBrakeDisable(true);
  };
  return (
    <BreakContext.Provider
      value={{
        brakeDuration,
        disableBrake,
        isBrakeDisable,
        increaseBrake,
        decreaseBrake,
        resetBrake,
      }}
    >
      {children}
    </BreakContext.Provider>
  );
};
export default BreakProvider;
