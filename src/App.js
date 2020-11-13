import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./components/redux/ConfigureStore";
import Home from "./components/Home/Home";
import Questions from "./components/Questions/Questions";
import Result from "./components/Result/Result";

function App() {
  return (
    <Provider store={store}>
      <div className="container py-5">
        <BrowserRouter>
          <Switch>
            <Route path={"/"} exact component={Home} />
            <Route
              path={"/questions/:questionId"}
              exact
              component={Questions}
            />
            <Route path={"/result"} exact component={Result} />
          </Switch>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
