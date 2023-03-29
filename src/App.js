import './App.css';
import Counter from "./component/Counter";
import {Fragment} from "react";
import Info from "./component/Info";
import ContextSample from "./component/ContextSample";
import Average from "./component/Average";

const App = () => {
  return (
      <Fragment>
          <Counter/>
          <br/>
          <Info/>
          <br/>
          <ContextSample/>
          <br/>
          ==================
          <br/>
          <Average/>
      </Fragment>
  );
};

export default App;
