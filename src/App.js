import "./styles/styles.scss";
import { Provider } from "react-redux";
import { getStore } from "./redux/store/store";

function App() {
  return (
    <Provider store={getStore()}>
      <div>Hello world</div>
    </Provider>
  );
}

export default App;
