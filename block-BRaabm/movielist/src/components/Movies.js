import data from "../data.json";
import Movie from "./Movie";
function Movies() {
  return (
    <div className="container mx-auto flex justify-between items-center flex-wrap py-4">
      {data.map((movie, index) => {
        return <Movie key={index} {...movie} />;
      })}
    </div>
  );
}
export default Movies;
