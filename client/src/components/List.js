import React from "react";
import { Col, Row, Container } from "./Grid";
import SaveButton from './SaveButton';
import ViewButton from './ViewButton';
import DeleteButton from './DeleteButton';

// This file exports both the List and ListItem components

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group">{children}</ul>
    </div>
  );
}

export function ListItem(props) {
  return (
  <li className="list-group-item">
    <Container fluid>
      <Row>
        <Col size="md-2">
          <div style={style.imgFrame}>
            <img src={props.book.imageLinks.thumbnail} style={style.thumbnail} />
            <div style={style.buttonContainer}>
              <ViewButton style={style.button} />
              <SaveButton style={style.button} />
            </div>
          </div>
        </Col>
        <Col size="md-10">
          <h3>
            {props.book.title}
          </h3>
          <h5>
              {props.book.subtitle}
          </h5>
          <div>
              by {props.book.authors}
          </div>
          <div style={style.description}>
              {props.book.description}
          </div>
        </Col>
      </Row>
    </Container>
  </li>
  );
}

const style = {
  imgFrame: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  thumbnail: {
    width: '150px',
  },
  description: {
    padding: '10px',
  },
  buttonContainer: {
    padding: '5px',
  },
  button: {
    margin: '5px',
    padding: '5px',
    border: "1px solid black",
  }
}