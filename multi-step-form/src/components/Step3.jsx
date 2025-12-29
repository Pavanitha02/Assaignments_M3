import { ACTIONS } from "../reducer/formReducer";

const Step3 = ({ state, dispatch }) => {
  const { formData } = state;

  return (
    <>
      <h3>Review & Submit</h3>

      <p><strong>Name:</strong> {formData.name}</p>
      <p><strong>Email:</strong> {formData.email}</p>
      <p><strong>Username:</strong> {formData.username}</p>

      <button onClick={() => dispatch({ type: ACTIONS.PREVIOUS_STEP })}>
        Back
      </button>

      <button onClick={() => dispatch({ type: ACTIONS.SUBMIT_FORM })}>
        Submit
      </button>
    </>
  );
};

export default Step3;
