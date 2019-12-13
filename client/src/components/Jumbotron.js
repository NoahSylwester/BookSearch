import React from "react";

function Jumbotron({ children }) {
  return (
    <div
      style={{
        color: 'whitesmoke',
        height: 300,
        clear: "both",
        paddingTop: 120,
        display: "flex",
        flexDirection: 'column',
        alignItems: 'center',
        backgroundImage: `url(${'https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2053&q=80'})`,
        backgroundSize: 'cover'}}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
