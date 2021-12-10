import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Trending from "./pages/Trending";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Route path="/" exact>
          <Redirect to="/home"/>
         </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/trending">
          <Trending />
        </Route>
      </main>
    </div>
  );
}

export default App;
