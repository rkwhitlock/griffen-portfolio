import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="img-overlay-wrap">
        <img className="prof" src="/home/prof.png"></img>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="122"
          height="122"
          viewBox="0 0 122 122"
          fill="none"
        >
          <circle cx="61" cy="61" r="61" fill="#F2F5CE" />
        </svg>{" "}
      </div>
      <div className="name">Griffen Bengard</div>
    </div>
  );
}

export default App;
