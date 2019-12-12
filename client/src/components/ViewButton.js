import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ViewButton(props) {
  return (
    <a className="btn btn-sm btn-primary view-btn" {...props} role="button" tabIndex="0">
      View
    </a>
  );
}

export default ViewButton;
