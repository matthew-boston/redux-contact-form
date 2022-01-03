import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuidv4 } from "uuid";

export const setAlert = (msg, icon) => (dispatch) => {
  const id = uuidv4();
  dispatch({ type: REMOVE_ALERT, payload: {} });
  dispatch({ type: SET_ALERT, payload: { msg, icon, id } });
};