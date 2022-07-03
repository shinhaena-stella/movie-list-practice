import { useState, useEffect } from "react";
import MovieTable from "./MovieTable";

const Search = ({ movies }) => {
  const [list, setList] = useState(movies);
  const [searchKey, setSearchKey] = useState("");
  const [sortKey, setSortKey] = useState("");

  useEffect(() => {
    const requestSort = (key) => {
      let newList = [...list];
      if (!key) return;

      newList.sort((a, b) => {
        if (a[key] < b[key]) return -1;
        if (a[key] > b[key]) return 1;
        return 0;
      });
      setList(newList);
    };

    requestSort(sortKey);
  }, [sortKey, list]);

  const searchRequest = () => {
    let newList = [...list];
    newList = newList.filter((movie) =>
      movie.title.toLowerCase().includes(searchKey)
    );
    console.log(newList);
    setList(newList);
  };

  return (
    <>
      <h1>Movie List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          searchRequest();
        }}
      >
        <input
          className="search-bar"
          type="text"
          onChange={(e) => setSearchKey(e.target.value)}
          onBlur={(e) => setSearchKey(e.target.value)}
          placeholder="Search by title"
        ></input>
        <button>Submit</button>
      </form>

      <label htmlFor="sort-select">Sort by </label>
      <select
        className="sort-select"
        onChange={(e) => setSortKey(e.target.value)}
      >
        <option />
        <option value="title">Title</option>
        <option value="country">Country</option>
        <option value="collection">Collection</option>
        <option value="releasedOn">Release Date</option>
      </select>

      <MovieTable movies={list} />
    </>
  );
};

export default Search;
