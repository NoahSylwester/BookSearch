import React from "react";

// This file exports the Input, TextArea, and FormBtn components

export function Input(props) {
  return (
    <div className="form-group" style={{ float: "left", marginBottom: 10, width: '80%' }}>
      <input className="form-control" {...props} />
    </div>
  );
}

export function SubmitButton(props) {
  return (
    <button {...props} style={{ float: "right", marginBottom: 10, width: '20%' }} className="btn btn-success">
      {props.children}
    </button>
  );
}