import { FORM_SUCCESS, REMOVE_ALERT } from "./types";

export const formSuccess = (name, email, message) => (dispatch) => {
  // Add send email code

  // Removes  alert
  dispatch({ type: REMOVE_ALERT, payload: {} });
  
  // Shows form success content
  dispatch({ type: FORM_SUCCESS, payload: true });
};
