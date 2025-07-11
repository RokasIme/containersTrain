import { useParams } from "react-router";
import { PageTitle } from "../../../components/page-title/PageTitle";
import { capitalize } from "../../../lib/capitalize";
import { useContext } from "react";
import { MovieList } from "../../../components/movies/MovieList";
import { MoviesContext } from "../../../context/movies/MoviesContext";

export function PageCategoryInner() {
  const { publicMovies } = useContext(MoviesContext);
  const params = useParams();
  const categoryMovies = publicMovies.filter((m) => m.categoryUrlSlug === params.category);

  return (
    <div className="container">
      <PageTitle title={capitalize(params.category)} />
      <MovieList data={categoryMovies} />
    </div>
  );
}
