import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { ContainersContext } from "../../context/containers/ContainersContext";

export function ContainerNewForm() {
  const { adminRefreshContainer } = useContext(ContainersContext);
  const [size, setSize] = useState("");

  const navigate = useNavigate();

  function handleResetClick() {
    setSize("");
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:5445/api/admin/containers", {
      method: "POST",
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

  return (
    <form onSubmit={handleFormSubmit} className="needs-validation col-12 col-md-10 col-lg-8 col-xl-6">
      <div className="row g-3">
        <div className="col-sm-12">
          <label htmlFor="size" className="form-label">
            select size
          </label>
          <select
            onChange={(e) => setSize(e.target.value)}
            value={size}
            type="text"
            className="form-control"
            id="size"
            placeholder=""
            required
          >
            <option>S</option>
            <option>M</option>
            <option>L</option>
          </select>
          <div className="invalid-feedback">Valid first name is required.</div>
        </div>
      </div>
      <hr className="my-4" />
      <div className="d-flex" style={{ gap: "1rem" }}>
        <button className="btn btn-success btn-lg" type="submit">
          Create
        </button>
        <button onClick={handleResetClick} className="btn btn-secondary btn-lg ms-auto" type="reset">
          Reset
        </button>
      </div>
    </form>
  );
}
