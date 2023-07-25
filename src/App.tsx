import "./App.css";
import Card from "./components/Card";
import questions from "./data";

function App() {
  return (
    <div className="w-full h-full">
      <Card questions={questions} />
    </div>
  );
}

export default App;
