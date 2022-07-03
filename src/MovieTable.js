import { useState, useEffect, useMemo } from "react";

const MovieTable = ({ movies }) => {
  return (
    <div>
      <table>
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
