import { Switch, Route } from "react-router-dom";

import "./App.css";

import { WelcomeScreen } from "./components/welcome";
import { Home } from "./components/main";
import { Plant } from "./components/plant";
import { AllPlants } from "./components/allPlants";
import { Nav } from "./components/nav";
import { Gardens } from "./components/gardens";
import { Garden } from "./components/garden";
import { Tour } from "./components/tour";


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
            <Tour />
          </Route>
          <Route exact path="/gardens">
            <Gardens />
          </Route>
          <Route exact path="/garden">
            <Garden />
          </Route>
          <Route exact path="/plants">
            <AllPlants />
          </Route>
          <Route exact path="/plant">
            <Plant />
          </Route>
          <Route exact path="/trees">
          <iframe title="Queens Botanical Garden Trees" src="https://www.google.com/maps/d/embed?mid=1rCxiPlEztjpkarehSm7Tm5waGQZm1oz1"></iframe>
          </Route>
       
        </Route>
      </Switch>
    </div>
  );
}

export default App;
