import React, { Fragment } from "react";
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import image from "../assets/image.png";
import successImage from "../assets/sent.gif";

const Image = ({success}) => {
  if (success) {
    return (
      <div className="success-card">
        <img src={successImage} alt="Envolope" />
        <h1>Thanking for contacting us! </h1>
        <p>We will responsed as fast as we can!</p>
      </div>
    );
  } else {
    return (
      <Fragment>
        <img src={image} alt="Envolope" />
      </Fragment>
    );
  }
};

Image.propTypes = {
  success: PropTypes.bool.isRequired,
}
const mapStateToProps = state =>({
  success: state.form
})

export default connect(mapStateToProps)(Image);
