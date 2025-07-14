import { Link } from "react-router";
import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeSuccess } from "../badge/BadgeSuccess";
import { useContext } from "react";
import { ContainersContext } from "../../context/containers/ContainersContext";
import { BoxesContext } from "../../context/boxes/boxesContext";

export function ContainersTableRow({ container }) {
  const { adminDeleteContainer } = useContext(ContainersContext);
  const { boxes, adminDeleteBox } = useContext(BoxesContext);

  const boxesInContainer = boxes.filter((b) => b.container_id === container.id);

  async function handleDeleteClick() {
    try {
      // Pirma ištrinam visus boxes
      await Promise.all(
        boxesInContainer.map((b) =>
          fetch("http://localhost:5445/api/admin/boxes/" + b.id, {
            method: "DELETE",
            credentials: "include",
          }).then((res) => res.json())
        )
      );

      // Tada ištrinam container
      const res = await fetch("http://localhost:5445/api/admin/containers/" + container.id, {
        method: "DELETE",
        credentials: "include",
      });

      const data = await res.json();

      if (data.status === "success") {
        adminDeleteContainer(container.id);
      }

      // Galiausiai pašalinam boxus iš state
      boxesInContainer.forEach((b) => adminDeleteBox(b.id));
    } catch (error) {
      console.error("Delete error:", error);
    }
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
