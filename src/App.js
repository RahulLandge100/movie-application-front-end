import React from "react";
import Header from "./components/layout/Header";
import Movie from "./components/movie_details/Movie";

function App() {
  return (
    <>
      <Header />
      <main>
        <Movie />
      </main>
    </>
  );
}

export default App;
