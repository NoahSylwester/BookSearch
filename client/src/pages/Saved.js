import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from '../components/List';
import API from '../utils/API';

function Saved() {

  const [ dataState, setDataState ] = useState([]);
  
  useEffect(() => {
    queryDatabaseForSavedBooks();
  }, []);

  const queryDatabaseForSavedBooks = () => {
    API.serverAPI.getBooks().then(res => {
      setDataState(res.data);
    })
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', textAlign: 'center', textShadow: '0 0 20px black' }}>Saved Books</h1>
            <h4 style={{ textShadow: '0 0 20px black' }}>Look at the books you've saved</h4>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <List>
            {dataState.length !== 0 ? dataState.map((element) => <ListItem saved={'true'} onClick={queryDatabaseForSavedBooks} book={element} />) : <h2 style={{textAlign: 'center'}}>Nothing saved yet.</h2>}
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default Saved;
