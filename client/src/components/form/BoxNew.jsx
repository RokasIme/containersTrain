import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import defaultImg from "../../assets/default.webp";
import { BoxesContext } from "../../context/boxes/boxesContext";
import { ContainersContext } from "../../context/containers/ContainersContext";

export function BoxNewForm() {
  const navigate = useNavigate();

  const { adminRefreshBoxes } = useContext(BoxesContext);
  const { containers } = useContext(ContainersContext);
  const notFullContainers = containers.filter(
    (c) => (c.size === "S" && c.count < 2) || (c.size === "M" && c.count < 4) || (c.size === "L" && c.count < 6)
  );

  const [img, setImg] = useState("");
  const [name, setName] = useState("");
  const [weight, setWeight] = useState(0);
  const [flammable, setFlammable] = useState(0);
  const [perishable, setPerishable] = useState(0);
  const [container, setContainer] = useState("");

  function handleResetClick() {
    setImg("");
    setName("");
    setWeight(0);
    setFlammable(0);
    setPerishable(0);
    setContainer("");
  }

  function handleImageChange(e) {
    const formData = new FormData();
    formData.append("thumbnail", e.target.files[0]);
    fetch("http://localhost:5445/api/admin/upload", {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setImg(data.msg);
        }
      })
      .catch(console.error);
  }

  function handleMainFormSubmit(e) {
    e.preventDefault();

    const data = { name, container, flammable, perishable };

    if (img) {
      data.img = img.split("/").at(-1);
    }
    if (weight) {
      data.weight = weight;
    }

    fetch("http://localhost:5445/api/admin/boxes", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          adminRefreshBoxes();
          navigate("/admin/boxes");
        }
      })
      .catch(console.error);
  }
  return (
    <>
      <form className="needs-validation col-12 col-md-10 col-lg-8 col-xl-6 mb-3">
        <div className="row g-3">
          <div className="col-12">
            <label htmlFor="thumbnail" className="form-label">
              Thumbnail
            </label>
            <input
              onChange={handleImageChange}
              className="form-control"
              id="thumbnail"
              name="thumbnail"
              type="file"
              required
            />
            <div className="invalid-feedback">Valid image is required.</div>
          </div>
          <img id="image" className="col-12 thumbnail" src={img ? img : defaultImg} alt="" />
          <p>Image url: {img}</p>
        </div>
      </form>

      <form onSubmit={handleMainFormSubmit} className="needs-validation col-12 col-md-10 col-lg-8 col-xl-6">
        <div className="row g-3">
          <div className="col-sm-12">
            <label htmlFor="name" className="form-label">
              Box name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              value={name}
              type="text"
              className="form-control"
              id="name"
              placeholder=""
              required
            />
            <div className="invalid-feedback">Valid first name is required.</div>
          </div>

          <div className="col-sm-12">
            <label htmlFor="weight" className="form-label">
              Weight
            </label>
            <input
              onChange={(e) => setWeight(e.target.value)}
              value={weight}
              type="text"
              className="form-control"
              id="weight"
              placeholder=""
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="my-3">
            <div className="form-check">
              <input
                onChange={() => setFlammable(0)}
                checked={flammable === 0 ? "checked" : ""}
                id="FlamNo"
                value=""
                name="FlamNo"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="draft">
                Not flammable
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={() => setFlammable(1)}
                checked={flammable === 1 ? "checked" : ""}
                id="FlamYes"
                value="1"
                name="FlamYes"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="publish">
                Flammable
              </label>
            </div>
          </div>

          <div className="my-3">
            <div className="form-check">
              <input
                onChange={() => setPerishable(0)}
                checked={perishable === 0 ? "checked" : ""}
                id="PerNo"
                value="0"
                name="PerNo"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="draft">
                Not perishable
              </label>
            </div>
            <div className="form-check">
              <input
                onChange={() => setPerishable(1)}
                checked={perishable === 1 ? "checked" : ""}
                id="PerYes"
                value="1"
                name="PerYes"
                type="radio"
                className="form-check-input"
              />
              <label className="form-check-label" htmlFor="publish">
                Perishable
              </label>
            </div>
          </div>

          <div className="col-12 col-sm-6">
            <label htmlFor="container" className="form-label">
              Container
            </label>
            <select
              onChange={(e) => setContainer(e.target.value)}
              value={container}
              className="form-control"
              id="container"
            >
              <option value="">Choose...</option>
              {notFullContainers.map((c) => (
                <option key={c.id} value={c.id}>
                  Dydis - {c.size}, Numeris - {c.id}
                </option>
              ))}
            </select>
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
    </>
  );
}
