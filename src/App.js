import "./styles/styles.scss";
import { Provider } from "react-redux";
import { getStore } from "./redux/store/store";
import { HashRouter, Switch, Route } from "react-router-dom";
import { CryptoConverter } from "./modules/cryptoConverter/CryptoConverter";
import { UserForm } from "./modules/userForm/UserForm";

function App() {
  return (
    <Provider store={getStore()}>
      <HashRouter>
        <Switch>
          <Route path="/crypto" component={CryptoConverter} />
          <Route path="/" component={UserForm} />
        </Switch>
      </HashRouter>
    </Provider>
  );
}

export default App;
