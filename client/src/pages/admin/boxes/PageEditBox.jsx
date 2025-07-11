import { BoxEditForm } from "../../../components/form/BoxEdit";
import { AdminTitle } from "../../../components/page-title/AdminTitle";

export function PageEditBox() {
  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="Edit box " />
      <BoxEditForm />
    </main>
  );
}
