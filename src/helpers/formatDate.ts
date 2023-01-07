import { format } from "date-fns";
export const formatTimer = (time: number): string => {
  const formatedTimer = format(new Date(time), "mm':'ss");

  if (time === 3600000) {
    return "60:00";
  }
  return formatedTimer;
};
