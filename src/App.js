import { Route, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import TrendingPage from "./pages/TrendingPage";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <main>
        <Route path="/" exact>
          <Redirect to="/home"/>
         </Route>
        <Route path="/home">
          <HomePage />
        </Route>
        <Route path="/trending">
          <TrendingPage />
        </Route>
      </main>
    </div>
  );
}

export default App;
