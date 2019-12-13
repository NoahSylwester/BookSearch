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
            <h1 style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '3rem', textAlign: 'center', textShadow: '0 0 20px black' }}>Readit</h1>
            <h4 style={{ textShadow: '0 0 20px black' }}>Search for books using the GoogleBooks API</h4>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Input onChange={event => setQueryState(event.target.value)} value={queryState} />
          <SubmitButton onClick={() => API.googleAPI.getBooks(queryState).then(res => setDataState(res.data.items))}>
              Search
          </SubmitButton>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <List>
            {dataState.length === 0 ? <h2 style={{textAlign: 'center', padding: '20px'}}>Search something.</h2> : dataState.map((element) => <ListItem saved={checkSaved(element)} dbbook={assignBookIfSaved(element)} onClick={queryDatabaseForSavedBooks} book={element.volumeInfo} id={element.id} />)}
          </List>
        </Col>
      </Row>
    </Container>
  );
}

export default Search;