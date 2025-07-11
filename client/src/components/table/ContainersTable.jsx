import { ContainersTableRow } from "./ContainersTableRow";

export function ContainersTable({ data }) {
  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Size</th>
            <th scope="col">Boxes in container</th>
            <th scope="col">Status</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <ContainersTableRow key={item.id} container={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
