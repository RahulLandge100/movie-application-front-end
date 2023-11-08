import React, { useEffect, useState, useCallback } from "react";
import MovieDashboard from './MovieDashboard';

const Movie = () => {
    const [MovieDetails, setMovieDetails] = useState([]);

    const fetchMovieDetails = useCallback(async () => {
        const BASE_URL = "http://localhost:8081/movie/get-All-Movies";
    
            try {
            const response = await fetch(BASE_URL);
            const data = await response.json();
            let loadedData = [];
            loadedData = Object.values(data);
            setMovieDetails(loadedData);
            } catch (error) {
            console.log(error);
            }
        }, []);

        useEffect(() => {
            fetchMovieDetails();
        },[]);
  
      return (
      <>
      <MovieDashboard MovieDetails={MovieDetails}/>
      </>
    );
  };
  
  export default Movie;