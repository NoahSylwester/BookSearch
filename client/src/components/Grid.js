import React from "react";
import { PromiseProvider } from "mongoose";

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children, black }) {
  return <div className={`container${fluid ? "-fluid" : ""}`} style={{ background: black ? 'black' : 'white', height: '100%', }}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children, black }) {
  return (
    <div
      style={{ background: black ? 'black' : 'none', height: '100%', }}
      className={size
        .split(" ")
        .map(size => "col-" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}
