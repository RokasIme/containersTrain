import { ContainerEditForm } from "../../../components/form/ContainerEdit";
import { AdminTitle } from "../../../components/page-title/AdminTitle";

export function PageEditContainer() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="Edit container" />
      <ContainerEditForm />
    </main>
  );
}
