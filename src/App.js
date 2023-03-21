import './App.css';
import Counter from "./component/Counter";
import {Fragment} from "react";
import Info from "./component/Info";
import ContextSample from "./component/ContextSample";

const App = () => {
  return (
      <Fragment>
          <Counter/>
          <br/>
          <Info/>
          <br/>
          <ContextSample/>
      </Fragment>
  );
};

export default App;
