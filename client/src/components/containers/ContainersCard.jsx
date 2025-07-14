import { Link } from "react-router";
import "./Style.css";
import { useContext } from "react";
import { BoxesContext } from "../../context/boxes/boxesContext";
import { BadgeDanger } from "../badge/BadgeDanger";

export function ContainerCard({ data }) {
  const { boxes } = useContext(BoxesContext);

  const boxesInContainer = boxes.filter((b) => +b.containerId === +data.id);

  const overallWeight = boxesInContainer.reduce((sum, box) => sum + box.weight, 0);

  return (
    <div className="feature col">
      <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
        <svg className="bi" width="1em" height="1em" aria-hidden="true" viewBox="0 0 16 16">
          {" "}
          <path d="M2.5 3.5a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-11zm2-2a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1h-7zM0 13a1.5 1.5 0 0 0 1.5 1.5h13A1.5 1.5 0 0 0 16 13V6a1.5 1.5 0 0 0-1.5-1.5h-13A1.5 1.5 0 0 0 0 6v7zm1.5.5A.5.5 0 0 1 1 13V6a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13z"></path>{" "}
        </svg>
      </div>
      <h3 className="fs-2 text-body-emphasis">Container Nr.: {data.id}</h3>
      <p>Size: {data.size} </p>
      <p>Boxes in container: {data.count} vnt.</p>
      <p>Overall weight: {overallWeight} kg.</p>
      <div>
        {(data.size === "S" && data.count === 2) ||
        (data.size === "M" && data.count === 4) ||
        (data.size === "L" && data.count === 6) ? (
          <BadgeDanger text="Container is FULL" />
        ) : (
          ""
        )}
      </div>

      <Link to={`/containers/${data.id}`} target="_blanc" className="icon-link">
        View containers inside
        <svg className="bi" aria-hidden="true" viewBox="0 0 16 16">
          {" "}
          <path
            fillRule="evenodd"
            d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
          ></path>{" "}
        </svg>
      </Link>
    </div>
  );
}
