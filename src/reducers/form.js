import { FORM_SUCCESS } from "../actions/types";

const form = (state = false, action) => {
  const { type } = action;
  
  switch (type) {
    case FORM_SUCCESS:
      return !state;

    default:
      return state;
  }
};

export default form;
