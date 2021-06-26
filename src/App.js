
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="title">
        <span className="blueLetter">l</span>
        <span className="greenLetter">d</span>
        <span className="yellowLetter">r</span>
        <span className="orangeLetter">x</span>
        <span className="redLetter">j</span>
        <span className="greyLetter">r</span>
        <span className="thistleLetter">v</span>
        <span className="pinkLetter">p</span>
      </div>
      <form className="login">
        <input type="text" placeholder="email" name="email"/><br/>
        <input type="password" placeholder="password" name="password"/>
      </form>
    </div>
  );
}

export default App;
