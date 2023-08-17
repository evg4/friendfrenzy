import "./App.css";
import peopleArray from "./personData";

import Card from "./card";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Friend Frenzy social media</h1>
      </header>
      <main>
        <div className="cards">
          {peopleArray.map((person) => {
            return <Card details={person} />;
          })}
        </div>
      </main>
      <footer>
        <p>
          All images from{" "}
          <a href="https://unsplash.com/" target="_blank">
            Unsplash
          </a>
          .
        </p>
      </footer>
    </div>
  );
}

export default App;
