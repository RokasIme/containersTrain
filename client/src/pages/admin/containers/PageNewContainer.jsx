import { ContainerNewForm } from "../../../components/form/ContainerNew";
import { AdminTitle } from "../../../components/page-title/AdminTitle";

export function PageNewContainer() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="New container " />
      <ContainerNewForm />
    </main>
  );
}
