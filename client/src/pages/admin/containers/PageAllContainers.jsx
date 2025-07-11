import { useContext } from "react";
import { AdminTitle } from "../../../components/page-title/AdminTitle";
import { ContainersTable } from "../../../components/table/ContainersTable";
import { ContainersContext } from "../../../context/containers/ContainersContext";

export function PageAllContainers() {
  const { containers } = useContext(ContainersContext);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="All " />
      <ContainersTable data={containers} />
    </main>
  );
}
