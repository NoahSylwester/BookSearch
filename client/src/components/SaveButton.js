import React from "react";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props) {
  return (
    <span className="btn btn-sm btn-primary save-btn" {...props} role="button" tabIndex="0">
      Save
    </span>
  );
}

export default SaveButton;
