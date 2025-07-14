import { Link } from "react-router";
import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeSuccess } from "../badge/BadgeSuccess";

export function BoxCard({ data }) {
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img src={data.thumbnail} className="card-thumbnail card-img-top" style={{ height: 225 }} />
        <div className="badge bg-primary card-badge">{data.weight} kg.</div>
        <div className="card-body">
          <p className="card-text">Box name: {data.name}</p>
          <p className="card-text">
            Flammable: {data.flammable ? <BadgeDanger text="Yes" /> : <BadgeSuccess text="No" />}{" "}
          </p>{" "}
          <p className="card-text">
            {" "}
            Perishable: {data.perishable ? <BadgeDanger text="Yes" /> : <BadgeSuccess text="No" />}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
