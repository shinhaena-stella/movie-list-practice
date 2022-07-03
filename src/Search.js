import { useState, useEffect } from "react";
import MovieTable from "./MovieTable";

const Search = ({ movies }) => {
  const [list, setList] = useState(movies);
  const [searchKey, setSearchKey] = useState("");
  const [sortKey, setSortKey] = useState("");
  const [sortDirection, setSortDirection] = useState(true);

  useEffect(() => {
    requestSort(sortKey);
  }, [sortKey, list]);

  const requestSort = (key) => {
    let newList = [...list];
    if (!key) return;

    newList.sort((a, b) => {
      if (a[key] < b[key]) return sortDirection ? -1 : 1;
      if (a[key] > b[key]) return sortDirection ? 1 : -1;
      return 0;
    });
    setList(newList);
  };

  const searchRequest = () => {
    let newList = [...list];
    newList = newList.filter((movie) =>
      movie.title.toLowerCase().includes(searchKey)
    );
    console.log(newList);
    setList(newList);
  };

  const getClassNamesFor = (key) => {
    return sortKey === key
      ? sortDirection
        ? "ascending"
        : "descending"
      : undefined;
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

      {/* <label htmlFor="sort-select">Sort by </label>
      <select
        className="sort-select"
        onChange={(e) => setSortKey(e.target.value)}
      >
        <option />
        <option value="title">Title</option>
        <option value="country">Country</option>
        <option value="collection">Collection</option>
        <option value="releasedOn">Release Date</option>
      </select> */}

      <table>
        <thead>
          <tr>
            <th>
              <button
                onClick={(e) => {
                  setSortKey("title");
                  setSortDirection(() => {
                    if (sortKey === "title") return !sortDirection;
                  });
                  requestSort(sortKey);
                }}
                className={getClassNamesFor("title")}
              >
                Title
              </button>
            </th>
            <th>
              <button
                onClick={(e) => {
                  setSortKey("country");
                  setSortDirection(() => {
                    if (sortKey === "country") return !sortDirection;
                  });
                  requestSort(sortKey);
                }}
                className={getClassNamesFor("country")}
              >
                Country
              </button>
            </th>
            <th>
              <button
                onClick={(e) => {
                  setSortKey("collection");
                  setSortDirection(() => {
                    if (sortKey === "collection") return !sortDirection;
                  });
                  requestSort(sortKey);
                }}
                className={getClassNamesFor("collection")}
              >
                Collection
              </button>
            </th>
            <th>
              <button
                onClick={(e) => {
                  setSortKey("releasedOn");
                  setSortDirection(() => {
                    if (sortKey === "releasedOn") return !sortDirection;
                  });
                  requestSort(sortKey);
                }}
                className={getClassNamesFor("releasedOn")}
              >
                Release Date
              </button>
            </th>
          </tr>
        </thead>
      </table>
      <MovieTable movies={list} />
    </>
  );
};

export default Search;
