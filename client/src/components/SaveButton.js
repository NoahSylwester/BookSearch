import React from "react";
import API from '../utils/API';

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function SaveButton(props) {
  function handleImage() {
    if (props.book.imageLinks === undefined || props.book.imageLinks.thumbnail === undefined) {
      return "http://i.imgur.com/sJ3CT4V.gif";
    }
    else {
      return props.book.imageLinks.thumbnail;
    }
  }
  return (
    <span className="btn btn-sm btn-primary save-btn"
      {...props}
      role="button"
      tabIndex="0"
      onClick={() => {API.serverAPI.saveBook({
        title: props.book.title,
        authors: props.book.authors,
        description: props.book.description,
        image: handleImage(),
        link: props.book.previewLink,
      }).then(() => props.onClick());
      }
      }
    >
      Save
    </span>
  );
}

export default SaveButton;
