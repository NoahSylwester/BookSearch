import React from "react";
import API from '../utils/API';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteButton(props) {
  return (
    <span
      className="btn btn-sm btn-primary delete-btn"
      {...props}
      role="button"
      tabIndex="0"
      onClick={() => {
        API.serverAPI.deleteBook(props.dbbook._id)
        .then(() => props.onClick());
      }}
    >
      Delete
    </span>
  );
}

export default DeleteButton;
