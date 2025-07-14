import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { ContainersContext } from "../../context/containers/ContainersContext";
import { BoxesContext } from "../../context/boxes/boxesContext";
import { BadgeDanger } from "../badge/BadgeDanger";
import { BadgeSuccess } from "../badge/BadgeSuccess";

export function ContainerEditForm() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { containers, adminRefreshContainer } = useContext(ContainersContext);
  const { boxes, adminDeleteBox } = useContext(BoxesContext);

  const boxesInContainer = boxes.filter((b) => b.container_id === +id);

  const [size, setSize] = useState("");
  const [initialSize, setInitialSize] = useState("");

  useEffect(() => {
    const containerData = id ? containers.find((c) => c.id === +id) : null;
    if (containerData) {
      setSize(containerData.size);
      setInitialSize(containerData.size);
    }
  }, [containers, id]);

  function handleResetClick(e) {
    e.preventDefault();
    setSize(initialSize);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5445/api/admin/containers/" + id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({ size }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          adminRefreshContainer();
          navigate("/admin/containers");
        }
      })
      .catch(console.error);
  }

  function handleDeleteClick(boxId) {
    fetch("http://localhost:5445/api/admin/boxes/" + boxId, {
      method: "DELETE",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          adminDeleteBox(boxId);
        }
      })
      .catch(console.error);
  }

  return (
    <form onSubmit={handleFormSubmit} className="needs-validation col-12 col-md-10 col-lg-8 col-xl-6">
      <div className="row g-3">
        <div className="col-sm-12">
          <label htmlFor="id" className="form-label">
            Container ID
          </label>
          <div value={id} type="text" className="form-control" id="id" placeholder="" required>
            {id}
          </div>
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-sm-12">
          <label htmlFor="size" className="form-label">
            size
          </label>
          <div
            onChange={(e) => setSize(e.target.value)}
            value={size}
            type="text"
            className="form-control"
            id="size"
            placeholder=""
            required
          >
            {size}
          </div>
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>

        <div className="col-sm-12">
          <label htmlFor="boxes" className="form-label">
            Boxes in the container
          </label>
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Thumbnail</th>
                <th scope="col">Name</th>
                <th scope="col">Weight</th>
                <th scope="col">Flammable</th>
                <th scope="col">Perishable</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {boxesInContainer.map((b) => (
                <tr key={b.id}>
                  <td>{b.id}</td>
                  <td>
                    <img style={{ maxWidth: "5rem", maxHeight: "5rem" }} src={b.thumbnail} alt="box thumbnail" />
                  </td>
                  <td>{b.name}</td>
                  <td>{b.weight} kg.</td>
                  <td>{b.flabodytbody ? <BadgeDanger text="Flammable" /> : <BadgeSuccess text="Not flammable" />}</td>
                  <td>{b.perishable ? <BadgeDanger text="Persishable" /> : <BadgeSuccess text="Not perishable" />}</td>
                  <td>
                    <div style={{ display: "flex", gap: "0.3rem" }}>
                      <button onClick={() => handleDeleteClick(b.id)} className="btn btn-danger" type="button">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="d-flex" style={{ gap: "1rem" }}>
        <button className="btn btn-success btn-lg" type="submit">
          Update
        </button>
        <button onClick={handleResetClick} className="btn btn-secondary btn-lg ms-auto" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
