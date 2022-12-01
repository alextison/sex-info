import "./App.css";
import NextButton from "../common/nextButton/NextButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Title />
        <div className="buttonRow">
          <NextButton text={"DOC"} href={""} colorFill={"F5F5F5"} />
          <NextButton text={"START"} href={""} colorFill={"F5F5F5"} />
        </div>
      </header>
    </div>
  );
}

function Title() {
  return (
    <div id="wrapper">
      <div id="container">
        <h1>SexInfo</h1>
      </div>
    </div>
  );
}

export default App;
