export const ACTIONS = {
  UPDATE_FIELD: "UPDATE_FIELD",
  NEXT_STEP: "NEXT_STEP",
  PREVIOUS_STEP: "PREVIOUS_STEP",
  SUBMIT_FORM: "SUBMIT_FORM",
  RESET_FORM: "RESET_FORM"
};

export const initialState = {
  step: 1,
  formData: {
    name: "",
    email: "",
    username: "",
    password: ""
  },
  isSubmitted: false
};

export function formReducer(state, action) {
  switch (action.type) {

    case ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        formData: {
          ...state.formData,
          [action.field]: action.value
        }
      };

    case ACTIONS.NEXT_STEP:
      return {
        ...state,
        step: state.step + 1
      };

    case ACTIONS.PREVIOUS_STEP:
      return {
        ...state,
        step: state.step - 1
      };

    case ACTIONS.SUBMIT_FORM:
      return {
        ...state,
        isSubmitted: true
      };

    case ACTIONS.RESET_FORM:
      return initialState;

    default:
      return state;
  }
}
