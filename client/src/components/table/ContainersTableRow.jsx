import { Link } from "react-router";
import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeSuccess } from "../badge/BadgeSuccess";
import { useContext } from "react";
import { ContainersContext } from "../../context/containers/ContainersContext";

export function ContainersTableRow({ container }) {
  const { adminDeleteContainer } = useContext(ContainersContext);

  function handleDeleteClick() {
    fetch("http://localhost:5445/api/admin/containers/" + container.id, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          adminDeleteContainer(container.id);
        }
      })
      .catch(console.error);
  }

  return (
    <tr>
      <td>{container.id}</td>
      <td>{container.size}</td>
      <td>{container.count}</td>

      <td>
        {(container.size === "S" && container.count === 2) ||
        (container.size === "M" && container.count === 4) ||
        (container.size === "L" && container.count === 6) ? (
          <BadgeDanger text="FULL" />
        ) : (
          <BadgeSuccess text="not full" />
        )}
      </td>
      <td>
        <div style={{ display: "flex", gap: "0.3rem" }}>
          <Link to={`/admin/containers/${container.id}/edit`} className="btn btn-primary">
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
