import { useContext } from "react";
import { AdminTitle } from "../../../components/page-title/AdminTitle";
// import { CategoriesTable } from "../../../components/table/CategoriesTable";
// import { CategoriesContext } from "../../../context/categories/CategoriesContext";

export function PagePublishedCategories() {
  // const { adminCategories } = useContext(CategoriesContext);

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="Published " />
      {/* <CategoriesTable data={adminCategories.filter((c) => c.is_published)} /> */}
    </main>
  );
}
