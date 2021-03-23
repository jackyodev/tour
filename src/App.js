import { Switch, Route, Link } from "react-router-dom";

import "./App.css";

import { welcomeScreen } from "./components/welcome";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/songs"
          render={() => {
            return <h1> Hello </h1>;
          }}
        ></Route>

        <Route exact path="/*" render={welcomeScreen}></Route>
      </Switch>
    </div>
  );
}

export default App;
