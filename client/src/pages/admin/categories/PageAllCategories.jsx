import { useContext } from "react";
import { AdminTitle } from "../../../components/page-title/AdminTitle";
import { CategoriesTable } from "../../../components/table/CategoriesTable";
// import { CategoriesContext } from "../../../context/categories/CategoriesContext";

export function PageAllCategories() {
  // const { adminCategories } = useContext(CategoriesContext);

  // laikinai - ištrinti ir paimti iš Context
  const adminCategories = 0;

  return (
    <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
      <AdminTitle title="All " />
      <CategoriesTable data={adminCategories} />
    </main>
  );
}
