import React, { useState, useEffect } from "react";

function ContactForm({ addOrEdit, currentID, contactObj }) {
  const initialFieldValues = {
    fullName: "",
    mobile: "",
    email: "",
    address: "",
  };
  const [values, setValues] = useState(initialFieldValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };
  useEffect(() => {
    currentID === ""
      ? setValues({ ...initialFieldValues })
      : setValues({ ...contactObj[currentID] });
  }, [currentID, contactObj]);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addOrEdit(values);
  };
  return (
    <form autoComplete="off" onSubmit={handleFormSubmit}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
          <input
            className="form-control"
            placeholder="Full Name"
            name="fullName"
            onChange={handleInputChange}
            value={values.fullName}
          />
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-phone"></i>
            </div>
            <input
              className="form-control"
              placeholder="Phone Number"
              name="mobile"
              onChange={handleInputChange}
              value={values.mobile}
            />
          </div>
        </div>
      </div>{" "}
      <div className="form-row">
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-envelope"></i>
            </div>
            <input
              className="form-control"
              placeholder="Email"
              name="email"
              onChange={handleInputChange}
              value={values.email}
            />
          </div>
        </div>
      </div>
      <div className="form-row">
        <div className="form-group input-group">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-home"></i>
            </div>
            <input
              className="form-control"
              placeholder="Address"
              name="address"
              onChange={handleInputChange}
              value={values.address}
            />
          </div>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Save
      </button>
    </form>
  );
}

export default ContactForm;
