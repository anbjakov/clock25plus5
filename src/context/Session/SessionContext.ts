import { createContext } from "react";
interface ISessionContext {
  DEFAULT_SESSION: number;
  sessionDuration: number;
  disableSession?: () => void;
  isSessionDisable: boolean;
  increaseSession?: () => void;
  decreaseSession?: () => void;
  resetSession?: () => void;
}
const defaultSession = {
  DEFAULT_SESSION: 25,
  sessionDuration: 25,
  isSessionDisable: false,
};

const SessionContext = createContext<ISessionContext>(defaultSession);
export default SessionContext;
