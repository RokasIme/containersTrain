import { useContext } from "react";
import { AdminTitle } from "../../../components/page-title/AdminTitle";
import { ContainersContext } from "../../../context/containers/ContainersContext";
import { ContainersTable } from "../../../components/table/ContainersTable";

export function PageNotFullConatiners() {
  const { containers } = useContext(ContainersContext);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="Not full containers " />
      <ContainersTable
        data={containers.filter(
          (c) => (c.size === "S" && c.count < 2) || (c.size === "M" && c.count < 4) || (c.size === "L" && c.count < 6)
        )}
      />
    </main>
  );
}
