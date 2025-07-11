import { useContext } from "react";
import { AdminTitle } from "../../../components/page-title/AdminTitle";
import { BoxesTable } from "../../../components/table/BoxesTable";
import { BoxesContext } from "../../../context/boxes/boxesContext";

export function PageAllboxes() {
  const { boxes } = useContext(BoxesContext);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="All boxes" />
      <BoxesTable data={boxes} />
    </main>
  );
}
