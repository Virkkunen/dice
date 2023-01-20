import "./App.css";
import RollsProvider from "./context/RollsProvider";
import DiceMain from "./pages/DiceMain";

function App() {
  return (
    <RollsProvider>
      <div className="App">
        <DiceMain />
      </div>
    </RollsProvider>
  );
}

export default App;
