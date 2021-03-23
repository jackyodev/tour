import { Switch, Route } from "react-router-dom";

import "./App.css";

import { WelcomeScreen } from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/start"
          render={() => {
            return <h1> Hello </h1>;
          }}
        ></Route>

        <Route exact path="/*">
          <WelcomeScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
