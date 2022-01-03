import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { setAlert, removeAlert } from "../actions/alert";
import { formSuccess } from "../actions/form";
import validator from "validator";

const Form = ({ setAlert, removeAlert, formSuccess }) => {
  const [formData, setFormData] = useState({ name: "matt", email: "info@mdeev.net", message: "test" });
  const { name, email, message } = formData;

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();

    if (name === "" || email === "" || message === "") {
      // send error to alert action
      setAlert("Please fill fields", "far fa-folder-open");
    } else if (!validator.isEmail(email)) {
      setAlert("Enter a valid Email", "far fa-envelope");
      // send error to alert action
    } else {
      removeAlert();
      // send success message to action
      formSuccess(name, email, message)
    }
  };
  return (
    <Fragment>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" className="form-control" name="name" placeholder="Enter Name" value={name} onChange={(e) => onChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="text" id="email" className="form-control" name="email" placeholder="Enter E-mail" value={email} onChange={(e) => onChange(e)} />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea name="message" id="message" cols="10" rows="6" className="form-control" placeholder="Enter Message" value={message} onChange={(e) => onChange(e)}></textarea>
        </div>
        <button className="btn" type="submit">
          Send Form
        </button>
      </form>
    </Fragment>
  );
};

export default connect(null, { setAlert, removeAlert, formSuccess })(Form);
