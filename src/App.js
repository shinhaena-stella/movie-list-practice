import "./styles.css";
import MovieTable from "./MovieTable";
import Search from "./Search";

export default function App() {
  const movies = [
    {
      id: 1,
      title: "Matrix",
      country: 9,
      collection: 300, //in CRs
      releasedOn: 1999
    },
    {
      id: 2,
      title: "Tere Nam",
      country: 3,
      collection: 101,
      releasedOn: 2004
    },
    {
      id: 3,
      title: "Bahubali",
      country: 4,
      collection: 500,
      releasedOn: 1987
    },
    {
      id: 4,
      title: "Namja",
      country: 5,
      collection: 600,
      releasedOn: 1987
    }
  ];

  return (
    <div className="App">
      <Search movies={movies} />
    </div>
  );
}
