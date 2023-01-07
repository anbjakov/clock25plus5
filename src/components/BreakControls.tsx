import { useContext } from "react";
import BreakContext from "../context/Break/BreakContext";
import { Container, Wrap, Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const BreakControls = () => {
  const { brakeDuration, increaseBrake, decreaseBrake, isBrakeDisable } =
    useContext(BreakContext);
  const handleIncrease = () => {
    increaseBrake?.();
  };
  const handleDecrease = () => {
    decreaseBrake?.();
  };
  return (
    <>
      <Container centerContent>
        <Text id="break-label" fontSize="xl" color={"blue.600"}>
          Break Length
        </Text>
        <Wrap align="center">
          <IconButton
            id="break-increment"
            aria-label="increase break"
            icon={<AiOutlineArrowUp />}
            variant="outline"
            colorScheme="blue"
            fontSize="xl"
            onClick={handleIncrease}
            disabled={isBrakeDisable}
          />
          <Box>
            <Text id="break-length" fontSize="3xl" color={"blue.600"}>
              {brakeDuration}
            </Text>
          </Box>

          <IconButton
            id="break-decrement"
            aria-label="decrease break"
            icon={<AiOutlineArrowDown />}
            variant="outline"
            colorScheme="blue"
            fontSize="xl"
            onClick={handleDecrease}
            disabled={isBrakeDisable}
          />
        </Wrap>
      </Container>
    </>
  );
};

export default BreakControls;
