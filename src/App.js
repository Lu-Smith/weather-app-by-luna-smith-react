import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <h1>Hello People</h1>
        <Weather defaultCity="Edinburgh" />
      </div>
    </div>
  );
}

export default App;
