import { useContext } from "react";
import { AdminTitle } from "../../../components/page-title/AdminTitle";
import { MoviesContext } from "../../../context/movies/MoviesContext";
import { MoviesTable } from "../../../components/table/MoviesTable";

export function PageDraftMovies() {
  const { adminMovies } = useContext(MoviesContext);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="Draft " />
      {/* <MoviesTable data={adminMovies.filter((m) => !m.is_published)} /> */}
    </main>
  );
}
