import { useContext } from "react";
import { CategoriesList } from "./CategoriesList";
import { CategoriesContext } from "../../context/categories/CategoriesContext";

export function FeaturedCategories() {
  const { featuredCategories } = useContext(CategoriesContext);

  return (
    <div className="container px-4 py-5" id="featured-3">
      <h2 className="pb-2 border-bottom">Movies by category</h2>
      <CategoriesList data={featuredCategories} />
    </div>
  );
}
