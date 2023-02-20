import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <div className="main">
        <div className="main-container row">Main</div>
      </div>

      <footer className="footer">
        <div className="footer-container row">
          <h4>Footer</h4>
        </div>
      </footer>
    </div>
  );
}

export default App;
