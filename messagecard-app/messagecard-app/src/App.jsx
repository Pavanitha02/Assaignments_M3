import MessageCard from "./MessageCard";

function App() {
  return (
    <div>
      <h1>Message Cards</h1>

      <MessageCard
        title="Welcome"
        message="Welcome to React props example"
      />

      <MessageCard
        title="Reminder"
        message="Practice React every day"
      />

      <MessageCard
        title="Success"
        message="You are learning reusable components"
      />

      <MessageCard
        title="Tip"
        message="Props make components dynamic"
      />
    </div>
  );
}

export default App;
