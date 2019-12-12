import React, { useState, useEffect } from "react";
import { Col, Row, Container } from "../components/Grid";
import Jumbotron from "../components/Jumbotron";
import { List, ListItem } from '../components/List';
import { Input, SubmitButton } from '../components/SearchForm';
import API from '../utils/API';

function Search() {
    
    const [ queryState, setQueryState ] = useState('');
    const [ dataState, setDataState ] = useState([]);
    const [ savedDescriptionsState, setSavedDescriptionsState ] = useState([])
    const [ savedState, setSavedState ] = useState([])
    
    useEffect(() => {
      queryDatabaseForSavedBooks();
    }, []);

    const queryDatabaseForSavedBooks = () => {
      API.serverAPI.getBooks().then(res => {
        let temp = dataState;
        setSavedDescriptionsState(res.data.map((element) => element.description));
        setSavedState(res.data.map(element => element));
        setDataState(temp);
      })
    }

    const checkSaved = (element) => {
      return savedDescriptionsState.includes(element.volumeInfo.description) ? "true" : "false";
    }

    const assignBookIfSaved = (element) => {
      for (let i = 0; i < savedDescriptionsState.length; i++ ) {
        if (savedDescriptionsState[i] === element.volumeInfo.description) {
          return savedState[i];
        }
      }
      return null;
    }

  return (
    <Container fluid>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1>Google Books Search</h1>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Input onChange={event => setQueryState(event.target.value)} value={queryState} />
          <SubmitButton onClick={() => API.googleAPI.getBooks(queryState).then(res => setDataState(res.data.items))}>
              Search for books
          </SubmitButton>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <List>
            {dataState.map((element) => <ListItem saved={checkSaved(element)} dbbook={assignBookIfSaved(element)} onClick={queryDatabaseForSavedBooks} book={element.volumeInfo} id={element.id} />)}
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;