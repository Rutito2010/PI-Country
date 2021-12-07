import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./Components/Landing/Landing";
import NewActivity from "./Components/NewActivity/NewActivity";
import Country from "./Components/Country/Country";
import Home from "./Components/Home/Home";

export function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/Home" component={Home} />
          <Route path="/CreateActivity" component={NewActivity} />
          <Route exact path="/Country/:id" component={Country} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
