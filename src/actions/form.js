import { FORM_SUCCESS } from "./types";

export const formSuccess = (name, email, message) => (dispatch) => {
  // Add send email code

  dispatch({ type: FORM_SUCCESS, payload: true });
};
