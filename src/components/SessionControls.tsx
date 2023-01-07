import { useContext } from "react";
import SessionContext from "../context/Session/SessionContext";
import { Container, Wrap, Box } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
const SessionControls = () => {
  const {
    sessionDuration,
    increaseSession,
    decreaseSession,
    isSessionDisable,
  } = useContext(SessionContext);
  const handleIncreaseSession = () => {
    increaseSession?.();
  };
  const handleDecreaseSession = () => {
    decreaseSession?.();
  };
  return (
    <>
      <Container centerContent>
        <Text id="session-label" fontSize="xl" color={"blue.600"}>
          Session Length
        </Text>
        <Wrap align="center">
          <IconButton
            id="session-increment"
            aria-label="increase session"
            icon={<AiOutlineArrowUp />}
            variant="outline"
            colorScheme="blue"
            fontSize="xl"
            onClick={handleIncreaseSession}
            disabled={isSessionDisable}
          />
          <Box>
            <Text id="session-length" fontSize="3xl" color={"blue.600"}>
              {sessionDuration}
            </Text>
          </Box>

          <IconButton
            id="session-decrement"
            aria-label="decrease session"
            icon={<AiOutlineArrowDown />}
            variant="outline"
            colorScheme="blue"
            fontSize="xl"
            onClick={handleDecreaseSession}
            disabled={isSessionDisable}
          />
        </Wrap>
      </Container>
    </>
  );
};

export default SessionControls;
