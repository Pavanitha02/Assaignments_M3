import { useReducer } from "react";
import { formReducer, initialState } from "./reducer/formReducer";

import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";

function App() {
  const [state, dispatch] = useReducer(formReducer, initialState);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Multi-Step Registration Form</h2>
      <p>Step {state.step} / 3</p>

      {state.isSubmitted ? (
        <>
          <h3>Form Submitted Successfully 🎉</h3>
          <button onClick={() => dispatch({ type: "RESET_FORM" })}>
            Reset
          </button>
        </>
      ) : (
        <>
          {state.step === 1 && <Step1 state={state} dispatch={dispatch} />}
          {state.step === 2 && <Step2 state={state} dispatch={dispatch} />}
          {state.step === 3 && <Step3 state={state} dispatch={dispatch} />}
        </>
      )}
    </div>
  );
}

export default App;
