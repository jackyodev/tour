import { Switch, Route } from "react-router-dom";

import "./App.css";

import { WelcomeScreen } from "./components/welcome";
import { Home } from "./components/main";
import { Plants } from "./components/plants";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/plants">
          <Plants />
        </Route>
        <Route exact path="/home">
          <Home />
        </Route>
        <Route exact path="/*">
          <WelcomeScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
