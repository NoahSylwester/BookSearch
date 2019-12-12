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
  function handleImage() {
    if (props.book.image !== undefined) {
      return props.book.image;
    }
    else if (props.book.imageLinks === undefined || props.book.imageLinks.thumbnail === undefined) {
      return "http://i.imgur.com/sJ3CT4V.gif";
    }
    else {
      return props.book.imageLinks.thumbnail;
    }
  }
  return (
  <li className="list-group-item">
    <Container fluid>
      <Row>
        <Col size="md-2">
          <div style={style.imgFrame}>
            <img src={handleImage()} style={style.thumbnail} />
            <div style={style.buttonContainer}>
              <ViewButton href={props.book.previewLink || props.book.link} style={style.button} />
              {props.saved === 'true' && <DeleteButton book={props.book} style={style.button} /> || <SaveButton book={props.book} style={style.button} />}
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
    justifyContent: 'space-around',
  },
  thumbnail: {
    width: '150px',
  },
  description: {
    padding: '10px',
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '5px',
  },
  button: {
    margin: '10px',
  }
}