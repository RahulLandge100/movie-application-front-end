import React, {useState, useEffect}from "react";
import Card from "../UI/Card";
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterMovie from "./FilterMovie/FilterMovie";

const MovieDashboard = (props) => {
  const [search, setSearch] = useState('');
  const [filterTextValue, setFilterTextValue] = useState('');

  let filterMovieDetails = props.MovieDetails.filter((movie) => {
    if(filterTextValue === 'Drama') {
      return movie.genre === 'Drama';
    }
    else if(filterTextValue === 'Animation') {
      return movie.genre === 'Animation';
    }
    else if(filterTextValue === 'Horror') {
      return movie.genre === 'Horror';
    }
    else if(filterTextValue === 'History') {
      return movie.genre === 'History';
    }
    else {
      return movie;
    }
  })

  function onFilterValueSelected(filterValue) {
    setFilterTextValue(filterValue);
  }
  
  return(
        <>
        <Card>
      <div>
      <Container>
        <h1 className='text-center mt-4'>Movie Details</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search movie by Movie Title'
            />
          </InputGroup>
          <FilterMovie filterValueSelected={onFilterValueSelected}/>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Movie Id</th>
              <th>Date Of Release</th>
              <th>Movie Title</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>YOR</th>
              <th>Runtime</th>
            </tr>
          </thead>
          <tbody>
            {filterMovieDetails
              .filter((item) => {
                return search === ''
                  ? item
                  : item.movieTitle.includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.movieId}</td>
                  <td>{item.dateOfRelease}</td>
                  <td>{item.movieTitle}</td>
                  <td>{item.genre}</td>
                  <td>{item.rating}</td>
                  <td>{item.YOR}</td>
                  <td>{item.runtime}</td>
                </tr>
              ))}
          </tbody>
        </Table>
        </Container>
    </div>
    </Card>
  </>
  );
}

export default MovieDashboard;