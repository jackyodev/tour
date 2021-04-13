import { Switch, Route } from "react-router-dom";

import "./App.css";

import { WelcomeScreen } from "./components/welcome";
import { Home } from "./components/main";
import { Plant } from "./components/plant";
import { AllPlants } from "./components/allPlants";
import { Nav } from "./components/nav";
import { Gardens } from "./components/gardens";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <WelcomeScreen />
        </Route>
        <Route path="/*">
          <nav>{Nav()}</nav>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tours">
            <h1> /tours</h1>
          </Route>
          <Route exact path="/gardens">
            <Gardens />
          </Route>
          <Route exact path="/garden">
            <h1> /garden</h1>
          </Route>
          <Route exact path="/plants">
            <AllPlants />
          </Route>
          <Route exact path="/plant">
            <Plant />
          </Route>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
