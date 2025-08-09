import image from './images/linkedIn-logo.png';
import './App.css';
import ComponentsList from "./Components/ComponentsLists";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={image} className="App-logo" alt="logo" />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
      <ComponentsList/>
      </header>
    </div>
  );
}

export default App;
