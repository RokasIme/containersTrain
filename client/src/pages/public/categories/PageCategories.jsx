import { useContext } from "react";
import { PageTitle } from "../../../components/page-title/PageTitle";

// import { CategoriesList } from "../../../components/categories/CategoriesList";
// import { CategoriesContext } from "../../../context/categories/CategoriesContext";

export function PageCategories() {
  // const { publicCategories } = useContext(CategoriesContext);

  return (
    <div className="container">
      <PageTitle title="All " />
      {/* <CategoriesList data={publicCategories} /> */}
    </div>
  );
}
