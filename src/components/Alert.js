import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <div key={alert.id} className="alert">
      <i className={alert.icon}></i>
      <p>{alert.msg}</p>
    </div>
  ));

Alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

// Get the state
const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
