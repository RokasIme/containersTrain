import { Link } from "react-router";
import { formatMovieDuration } from "../../lib/formatMovieDuration";

export function MovieCard({ data }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          src={"http://localhost:5445/img/thumbnails/" + data.thumbnail}
          className="card-thumbnail card-img-top"
          style={{ height: 225 }}
        />
        <div className="badge bg-primary card-badge">{data.categoryName}</div>
        <div className="card-body">
          <Link to={`/movies/${data.url_slug}`} className="h4">
            {data.title}
          </Link>
          <p className="card-text">{data.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/movies/${data.url_slug}`} className="btn btn-sm btn-outline-secondary">
                Read more
              </Link>
            </div>
            <small className="text-body-secondary">{formatMovieDuration(data.duration)}</small>
          </div>
        </div>
      </div>
    </div>
  );
}
