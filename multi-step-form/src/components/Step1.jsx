import { ACTIONS } from "../reducer/formReducer";

const Step1 = ({ state, dispatch }) => {
  return (
    <>
      <h3>Personal Details</h3>

      <input
        type="text"
        placeholder="Name"
        value={state.formData.name}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.UPDATE_FIELD,
            field: "name",
            value: e.target.value
          })
        }
      />

      <input
        type="email"
        placeholder="Email"
        value={state.formData.email}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.UPDATE_FIELD,
            field: "email",
            value: e.target.value
          })
        }
      />

      <button
        disabled={!state.formData.name || !state.formData.email}
        onClick={() => dispatch({ type: ACTIONS.NEXT_STEP })}
      >
        Next
      </button>
    </>
  );
};

export default Step1;
