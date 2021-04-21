import "./App.css";
import Navigation from "./components/Navbar";
import Saved from "./pages/savedbooks"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Hero />
        <Route exact path="/saved" component={Search}/>
        <Route exact path="/saved" component={Saved}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
