import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container night-theme">
        <div className="box">
          <Weather defaultCity="Edinburgh" />
        </div>
      </div>
    </div>
  );
}

export default App;
