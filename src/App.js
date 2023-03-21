import './App.css';
import Counter from "./component/Counter";
import {Fragment} from "react";
import Info from "./component/Info";

const App = () => {
  return (
      <Fragment>
          <Counter/>
          <br/>
          <Info/>
      </Fragment>
  );
};

export default App;
