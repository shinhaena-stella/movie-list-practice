import { useState, useEffect, useMemo } from "react";

const MovieTable = ({ movies }) => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Country</th>
            <th>Collection</th>
            <th>Release Date</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie) => (
            <tr key={movie.id}>
              <td>{movie.title}</td>
              <td>{movie.country}</td>
              <td>{movie.collection}</td>
              <td>{movie.releasedOn}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovieTable;
