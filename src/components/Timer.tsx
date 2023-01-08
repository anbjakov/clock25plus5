import { useState, useEffect, useContext, useCallback, useRef } from "react";
import "@fontsource/orbitron";
import BreakContext from "../context/Break/BreakContext";
import SessionContext from "../context/Session/SessionContext";
import { Container } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { formatTimer } from "../helpers/formatDate";
import TimerControls from "./TimerControls";

const Timer = () => {
  const { resetBrake, disableBrake, brakeDuration } = useContext(BreakContext);
  const { resetSession, sessionDuration, DEFAULT_SESSION, disableSession } =
    useContext(SessionContext);
  const [isSession, setSession] = useState(false);
  const [isBreak, setBreak] = useState(false);
  const [isPause, setPause] = useState(false);
  const [timerTime, setTimerTime] = useState(DEFAULT_SESSION * 60000);
  const [isTimerStarted, setTimerStart] = useState(false);

  useEffect(() => {
    setTimerTime(sessionDuration * 60000);
  }, [sessionDuration]);

  useEffect(() => {
    if (isSession) {
      setTimerTime(sessionDuration * 60000);
    }
    if (isBreak) {
      setTimerTime(brakeDuration * 60000);
    }
  }, [isSession, isBreak]);

  useEffect(() => {
    if (isTimerStarted) {
      let timerCountDownInt = setInterval(() => {
        setTimerTime((prevTime) => (prevTime > 0 ? prevTime - 1000 : 0));
        if (timerTime === 0) {
          audioElement.current?.play();
          setBreak(!isBreak);
          setSession(!isSession);
          clearInterval(timerCountDownInt);
        }
        if (isPause) clearInterval(timerCountDownInt);
      }, 1000);

      return () => clearInterval(timerCountDownInt);
    }
  }, [isTimerStarted, timerTime]);
  const audioElement = useRef<HTMLAudioElement>(null);
  const signal =
    "https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav";
  const handleStart = useCallback((): void => {
    setTimerStart(!isTimerStarted);
    if (!isBreak) setSession(true);
    setPause(!isPause);
    disableBrake?.();
    disableSession?.();
  }, [isTimerStarted, isBreak, isPause]);

  const handlePause = useCallback((): void => {
    setTimerStart(!isTimerStarted);
    setPause(true);
  }, [isTimerStarted]);
  const handleReset = useCallback((): void => {
    setTimerStart(false);
    setSession(false);
    setPause(false);
    setBreak(false);
    resetBrake?.();
    resetSession?.();
    audioElement.current?.pause();
    if (audioElement.current) audioElement.current.currentTime = 0;

    setTimerTime(DEFAULT_SESSION * 60000);
  }, []);
  return (
    <>
      <Container
        centerContent
        border="1px"
        borderRadius="90px"
        borderWidth="5px"
        borderColor={timerTime < 60000 ? "red.600" : "blue.600"}
      >
        <Text
          id="timer-label"
          fontSize="xl"
          color={timerTime < 60000 ? "red.600" : "blue.600"}
        >
          {isBreak ? "Break" : "Session"}
        </Text>
        <Text
          id="time-left"
          color={timerTime < 60000 ? "red.600" : "blue.600"}
          fontSize="6xl"
          fontFamily="Orbitron"
        >
          {formatTimer(timerTime)}
        </Text>
      </Container>
      <Container centerContent>
        <TimerControls
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
        />
      </Container>
      <audio id="beep" src={signal} ref={audioElement} preload="auto"></audio>

      <Container centerContent>
        <Text color={"blue.600"}>coded by Andrii Biakov</Text>
      </Container>
    </>
  );
};

export default Timer;
