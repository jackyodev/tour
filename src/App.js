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
      <div className = "main" >

      <Switch>
        <Route exact path="/">
          <WelcomeScreen />
        </Route>
        <Route path="/*">
          <nav>{Nav()}</nav>
          <Route exact path="/home">
            <div className = "section"> 
              <Home />
            </div>
          </Route>
          <Route exact path="/tours">
            <div className = "section"> 
            <Tour />
            </div>
          </Route>
          <Route exact path="/gardens">
          <div className = "section"> 
          <Gardens />
            </div>
          </Route>
          <Route exact path="/garden">
            <div className = "section"> 
            <Garden />
            </div>
          </Route>
          <Route exact path="/plants">
            <div className = "section"> 
            <AllPlants />
            </div>
          </Route>
          <Route exact path="/plant">
            <div className = "section"> 
            <Plant />
            </div>
          </Route>
          <Route exact path="/trees">
          <iframe title="Queens Botanical Garden Trees" src="https://www.google.com/maps/d/embed?mid=1rCxiPlEztjpkarehSm7Tm5waGQZm1oz1"></iframe>
          </Route>
       
        </Route>
      </Switch>

      </div>
    
    </div>
  )
}

export default App;
