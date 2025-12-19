import UserData from "./UserData";

function App() {
  return (
    <div>
      <UserData />
    </div>
  );
}

export default App;
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;


import StatusToggle from "./StatusToggle";

function App() {
  return (
    <div>
      <StatusToggle />
    </div>
  );
}

export default App;
import ColorToggle from "./ColorToggle";

function App() {
  return (
    <div>
      <ColorToggle />
    </div>
  );
}

export default App;

import { useState } from "react";
import TodosList from "./TodosList";

function App() {
  const [showTodos, setShowTodos] = useState(true);

  const unmountTodos = () => {
    setShowTodos(false);
  };

  return (
    <div>
      <button onClick={unmountTodos}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  );
}

export default App;
