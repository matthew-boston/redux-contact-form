import React, { Fragment } from "react";

// Redux
import { Provider } from "react-redux";
import store from "./store";

// Components
import Form from "./components/Form";
import Alert from "./components/Alert";
import Image from "./components/Image";

// images & css

import "./scss/main.scss";
const App = () => {

  return (
    <Provider store={store}>
      <Fragment>
        <div className="wrapper">
          <div className="inner-wrapper">
            <Image />
          </div>
          <div className="inner-wrapper">
            <div className="form-wrapper">
              <h1>Contact Us</h1>
              <Alert />
              <Form />
            </div>
          </div>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
