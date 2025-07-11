import { useContext } from "react";
import { Link } from "react-router";
import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeSuccess } from "../badge/BadgeSuccess";
import defaultImg from "../../assets/default.webp";

import { BoxesContext } from "../../context/boxes/boxesContext";

export function BoxesTableRow({ box }) {
  const { adminDeleteBox } = useContext(BoxesContext);
  const img = box.thumbnail ? box.thumbnail : defaultImg;

  function handleDeleteClick() {
    fetch("http://localhost:5445/api/admin/boxes/" + box.id, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          adminDeleteBox(box.id);
        }
      })
      .catch(console.error);
  }

  return (
    <tr>
      <td>{box.id}</td>
      <td>
        <img style={{ maxWidth: "5rem", maxHeight: "5rem" }} src={img} alt="box thumbnail" />
      </td>
      <td>{box.name}</td>
      <td>{box.weight} kg.</td>
      <td>{box.flammable ? <BadgeDanger text="Flammable" /> : <BadgeSuccess text="Not flammable" />}</td>
      <td>{box.perishable ? <BadgeDanger text="Persishable" /> : <BadgeSuccess text="Not perishable" />}</td>
      <td>{box.containerSize}</td>
      <td>{box.containerId}</td>

      <td>
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <Link className="btn btn-primary" to={`/admin/boxes/${box.id}/edit`}>
            Edit
          </Link>
          <button onClick={handleDeleteClick} className="btn btn-danger" type="button">
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
}
