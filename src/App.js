import "./styles.css";
import Hero from "./Components/Hero";
import Shows from "./Components/Shows";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Details from "./Components/Details";
import CssBaseline from "@mui/material/CssBaseline";

export default function App() {
  return (
    <Router>
      <div className="App">
        <CssBaseline />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Shows />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
