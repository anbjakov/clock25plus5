import { useState } from "react";
import SessionContext from "./SessionContext";
type SessionProviderProps = {
  children?: React.ReactNode;
};

const SessionProvider = ({ children }: SessionProviderProps) => {
  const DEFAULT_SESSION = 25;
  const MAX_SESSION_DURATION = 60;
  const MIN_SESSION_DURATION = 1;
  const [sessionDuration, setSessionDuration] = useState(DEFAULT_SESSION);
  const [isSessionDisable, setSessionDisable] = useState(false);
  const increaseSession = () => {
    setSessionDuration((prevSessionDuration) => {
      if (prevSessionDuration + 1 > MAX_SESSION_DURATION)
        return MAX_SESSION_DURATION;

      return prevSessionDuration + 1;
    });
  };
  const decreaseSession = () => {
    setSessionDuration((prevSessionDuration) => {
      if (prevSessionDuration - 1 <= MIN_SESSION_DURATION)
        return MIN_SESSION_DURATION;
      return prevSessionDuration - 1;
    });
  };
  const disableSession = () => {
    setSessionDisable(true);
  };
  const resetSession = () => {
    setSessionDuration(DEFAULT_SESSION);
    setSessionDisable(false);
  };
  return (
    <SessionContext.Provider
      value={{
        DEFAULT_SESSION,
        sessionDuration,
        isSessionDisable,
        disableSession,
        increaseSession,
        decreaseSession,
        resetSession,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
};

export default SessionProvider;
