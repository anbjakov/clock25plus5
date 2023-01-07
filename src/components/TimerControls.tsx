import { memo } from "react";
import { IconButton } from "@chakra-ui/react";
import { Wrap } from "@chakra-ui/react";

import {
  AiFillPauseCircle,
  AiFillPlayCircle,
  AiOutlineSync,
} from "react-icons/ai";

type TimerControlsProps = {
  handleStart: () => void;
  handlePause: () => void;
  handleReset: () => void;
};
const TimerControls = ({
  handleStart,
  handlePause,
  handleReset,
}: TimerControlsProps) => {
  return (
    <>
      <Wrap align="center" mt="4">
        <IconButton
          id="start_stop"
          variant="outline"
          aria-label="Start"
          fontSize="3xl"
          colorScheme="blue"
          icon={<AiFillPlayCircle />}
          onClick={handleStart}
        />

        <IconButton
          aria-label="Pause"
          variant="outline"
          colorScheme="blue"
          fontSize="3xl"
          icon={<AiFillPauseCircle />}
          onClick={handlePause}
        />
        <IconButton
          id="reset"
          aria-label="Reset"
          icon={<AiOutlineSync />}
          variant="outline"
          colorScheme="blue"
          fontSize="3xl"
          onClick={handleReset}
        />
      </Wrap>
    </>
  );
};

export default memo(TimerControls);
