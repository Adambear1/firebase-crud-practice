import React, { useEffect, useState, useRef } from "react";
import ContactForm from "./ContactForm";
import fireDB from "../config";

function Contacts() {
  const [contactObj, setContactObj] = useState({});
  const [currentID, setCurrentID] = useState("");
  useEffect(() => {
    fireDB.child("contacts").on("value", (snapshot) => {
      snapshot.val() !== null
        ? setContactObj({
            ...snapshot.val(),
          })
        : setContactObj({});
    });
  }, []);
  const addOrEdit = (obj) => {
    fireDB.child("contacts").push(obj, (err) => {
      if (err) console.log(err);
    });
  };
  const onDelete = (key) => {
    if (window.confirm("Are you sure you want to delete this record?")) {
      fireDB
        .child(`contacts/${key}`)
        .remove((err) => (err ? console.log(err) : setCurrentID("")));
    }
  };

  return (
    <>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4 text-center">Contact Register</h1>
        </div>
      </div>
      <div classNameName="row">
        <div className="col-md-5">
          <ContactForm {...{ addOrEdit, currentID, contactObj }} />
        </div>
        <div className="col-md-7">
          <table className="table table-borderles table-stripped">
            <thead className="thead-light">
              <tr>
                <th>Full Name</th>
                <th>Mobile</th>
                <th>Email</th>
                <th>Address</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(contactObj).map((id) => (
                <tr key={id}>
                  <td>{contactObj[id].fullName}</td>
                  <td>{contactObj[id].mobile}</td>
                  <td>{contactObj[id].email}</td>
                  <td>{contactObj[id].address}</td>
                  <td>
                    <a
                      className="btn btn-secondary"
                      onClick={() => {
                        setCurrentID(id);
                      }}
                    >
                      <i className="fas fa-pencil-alt" />
                    </a>
                    <a className="btn btn-danger" onClick={() => onDelete(id)}>
                      <i className="far fa-trash-alt" />
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Contacts;
