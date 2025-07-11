import { Link } from "react-router";

export function Sidebar() {
  return (
    <div className="sidebar border border-right col-md-3 col-lg-2 p-0 bg-body-tertiary">
      <div
        className="offcanvas-md offcanvas-end bg-body-tertiary"
        tabIndex="-1"
        id="sidebarMenu"
        aria-labelledby="sidebarMenuLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="sidebarMenuLabel">
            Company name
          </h5>{" "}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            data-bs-target="#sidebarMenu"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body d-md-flex flex-column p-3 pt-lg-3 overflow-y-auto">
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <Link to="/admin/" className="nav-link d-flex align-items-center gap-2">
                Dashboard
              </Link>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Containers</span>
          </h6>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <Link to="/admin/containers/new" className="nav-link d-flex align-items-center gap-2">
                Add new
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/containers" className="nav-link d-flex align-items-center gap-2">
                All containers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/containers/full" className="nav-link d-flex align-items-center gap-2">
                Full containers
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/containers/notfull" className="nav-link d-flex align-items-center gap-2">
                Not full containers
              </Link>
            </li>
          </ul>
          <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-body-secondary text-uppercase">
            <span>Boxes</span>
          </h6>
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <Link to="/admin/boxes/new" className="nav-link d-flex align-items-center gap-2">
                Add new box
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/admin/boxes" className="nav-link d-flex align-items-center gap-2">
                All boxes
              </Link>
            </li>
          </ul>
          <hr className="my-3" />
          <ul className="nav nav-pills flex-column">
            <li className="nav-item">
              <Link to="/admin/settings" className="nav-link d-flex align-items-center gap-2">
                Settings
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
