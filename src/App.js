import { Switch, Route } from "react-router-dom";

import "./App.css";

import { WelcomeScreen } from "./components/welcome";
import { Home } from "./components/main";
import { Plant } from "./components/plant";
import { AllPlants } from "./components/allPlants";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/plant">
          <Plant />
        </Route>
        <Route exact path="/plants">
          <AllPlants />
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
