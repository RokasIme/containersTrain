import { BrowserRouter, Route, Routes } from "react-router";
import { UserContextWrapper } from "./context/user/UserContextWrapper";

import { PublicLayout } from "./layout/PublicLayout";
import { PrivateLayout } from "./layout/PrivateLayout";

import { PageHome } from "./pages/public/home/PageHome";
import { PageNotFound } from "./pages/PageNotFound";

import { PageMovies } from "./pages/public/movies/PageMovies";
import { PageMovieInner } from "./pages/public/movies/PageMovieInner";

import { PageCategories } from "./pages/public/categories/PageCategories";
import { PageCategoryInner } from "./pages/public/categories/PageCategoryInner";

import { PageLogin } from "./pages/public/auth/PageLogin";
import { PageRegister } from "./pages/public/auth/PageRegister";

import { PageDashboard } from "./pages/admin/PageDashboard";

import { PageAllContainers } from "./pages/admin/containers/PageAllContainers";
import { PageEditCategory } from "./pages/admin/containers/PageEditCategory";
import { PageFullConatiners } from "./pages/admin/containers/PageFullContainers";
import { PageNotFullConatiners } from "./pages/admin/containers/PageNotFullconatiners";
import { PageNewCategory } from "./pages/admin/containers/PageNewCategory";

import { PageAllMovies } from "./pages/admin/movies/PageAllMovies";
import { PageNewMovie } from "./pages/admin/movies/PageNewMovie";
import { PagePublishedMovies } from "./pages/admin/movies/PagePublishedMovies";
import { PageDraftMovies } from "./pages/admin/movies/PageDraftMovies";
import { PageEditMovie } from "./pages/admin/movies/PageEditMovie";
import { ContainersContextWrapper } from "./context/containers/ContainersContextWrapper";

export function App() {
  return (
    <UserContextWrapper>
      <ContainersContextWrapper>
        {/* <MoviesContextWrapper> */}
        <BrowserRouter>
          <Routes>
            <Route Component={PublicLayout}>
              <Route index path="/" element={<PageHome />} />
              <Route path="/containers" element={<PageMovies />} />
              {/* <Route path="/movies/:movie" element={<PageMovieInner />} /> */}
              <Route path="/categories" element={<PageCategories />} />
              {/* <Route path="/categories/:category" element={<PageCategoryInner />} /> */}

              <Route path="/register" element={<PageRegister />} />
              <Route path="/login" element={<PageLogin />} />
            </Route>
            <Route Component={PrivateLayout}>
              <Route path="/admin" element={<PageDashboard />} />

              <Route path="/admin/containers" element={<PageAllContainers />} />
              <Route path="/admin/containers/new" element={<PageNewCategory />} />
              <Route path="/admin/containers/full" element={<PageFullConatiners />} />
              <Route path="/admin/containers/notfull" element={<PageNotFullConatiners />} />
              <Route path="/admin/conatiners/:id" element={<PageEditCategory />} />
              <Route path="/admin/containers/:id/edit" element={<PageEditCategory />} />

              <Route path="/admin/movies" element={<PageAllMovies />} />
              <Route path="/admin/movies/new" element={<PageNewMovie />} />
              <Route path="/admin/movies/published" element={<PagePublishedMovies />} />
              <Route path="/admin/movies/draft" element={<PageDraftMovies />} />
              <Route path="/admin/movies/:movie" element={<PageEditMovie />} />
              <Route path="/admin/movies/:movie/edit" element={<PageEditMovie />} />
            </Route>
            <Route Component={PublicLayout}>
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
        {/* </MoviesContextWrapper> */}
      </ContainersContextWrapper>
    </UserContextWrapper>
  );
}
