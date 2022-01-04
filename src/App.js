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
          <div className="left-wrapper">
            <h1>Get In Touch .</h1>
            <small>Get in touch with me today. Fill out the form below and we will respond to you as fast as possible. Thank you for contacting us!</small>
            <Form />
          </div>
          <div className="inner-wrapper">
            <Image />
          </div>
        </div>
      </Fragment>
    </Provider>
  );
};

export default App;
