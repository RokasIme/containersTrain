import { BoxesTableRow } from "./BoxesTableRow";

export function BoxesTable({ data }) {
  return (
    <div className="table-responsive small">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Thumbnail</th>
            <th scope="col">Name</th>
            <th scope="col">Weight</th>
            <th scope="col">Flammable</th>
            <th scope="col">Perishable</th>
            <th scope="col">Container Size</th>
            <th scope="col">Container Id</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <BoxesTableRow key={item.id} box={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
