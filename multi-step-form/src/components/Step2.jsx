import { ACTIONS } from "../reducer/formReducer";

const Step2 = ({ state, dispatch }) => {
  return (
    <>
      <h3>Account Details</h3>

      <input
        type="text"
        placeholder="Username"
        value={state.formData.username}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.UPDATE_FIELD,
            field: "username",
            value: e.target.value
          })
        }
      />

      <input
        type="password"
        placeholder="Password"
        value={state.formData.password}
        onChange={(e) =>
          dispatch({
            type: ACTIONS.UPDATE_FIELD,
            field: "password",
            value: e.target.value
          })
        }
      />

      <button onClick={() => dispatch({ type: ACTIONS.PREVIOUS_STEP })}>
        Back
      </button>

      <button
        disabled={!state.formData.username || !state.formData.password}
        onClick={() => dispatch({ type: ACTIONS.NEXT_STEP })}
      >
        Next
      </button>
    </>
  );
};

export default Step2;
