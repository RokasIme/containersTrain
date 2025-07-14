import { BrowserRouter, Route, Routes } from "react-router";
import { UserContextWrapper } from "./context/user/UserContextWrapper";

import { PublicLayout } from "./layout/PublicLayout";
import { PrivateLayout } from "./layout/PrivateLayout";

import { PageHome } from "./pages/public/home/PageHome";
import { PageNotFound } from "./pages/PageNotFound";

import { PageLogin } from "./pages/public/auth/PageLogin";
import { PageRegister } from "./pages/public/auth/PageRegister";

import { PageDashboard } from "./pages/admin/PageDashboard";

import { PageAllContainers } from "./pages/admin/containers/PageAllContainers";
import { PageEditContainer } from "./pages/admin/containers/PageEditContainer";
import { PageFullConatiners } from "./pages/admin/containers/PageFullContainers";
import { PageNotFullConatiners } from "./pages/admin/containers/PageNotFullconatiners";
import { PageNewContainer } from "./pages/admin/containers/PageNewContainer";

import { PageAllboxes } from "./pages/admin/boxes/PageAllBoxes";
import { PageNewBoxes } from "./pages/admin/boxes/PageNewBox";

import { PageEditBox } from "./pages/admin/boxes/PageEditBox";
import { ContainersContextWrapper } from "./context/containers/ContainersContextWrapper";
import { BoxesContextWrapper } from "./context/boxes/BoxesContextWrapper";
import { PageContainers } from "./pages/public/containers/PageContainers";
import { PageContainersInner } from "./pages/public/containers/PageContainersInner";

export function App() {
  return (
    <UserContextWrapper>
      <ContainersContextWrapper>
        <BoxesContextWrapper>
          <BrowserRouter>
            <Routes>
              <Route Component={PublicLayout}>
                <Route index path="/" element={<PageHome />} />
                <Route path="/containers" element={<PageContainers />} />
                <Route path="/containers/:id" element={<PageContainersInner />} />
                {/* <Route path="/categories" element={<PageCategories />} /> */}
                {/* <Route path="/categories/:category" element={<PageCategoryInner />} /> */}

                <Route path="/register" element={<PageRegister />} />
                <Route path="/login" element={<PageLogin />} />
              </Route>
              <Route Component={PrivateLayout}>
                <Route path="/admin" element={<PageDashboard />} />

                <Route path="/admin/containers" element={<PageAllContainers />} />
                <Route path="/admin/containers/new" element={<PageNewContainer />} />
                <Route path="/admin/containers/full" element={<PageFullConatiners />} />
                <Route path="/admin/containers/notfull" element={<PageNotFullConatiners />} />
                <Route path="/admin/conatiners/:id" element={<PageEditContainer />} />
                <Route path="/admin/containers/:id/edit" element={<PageEditContainer />} />

                <Route path="/admin/boxes" element={<PageAllboxes />} />
                <Route path="/admin/boxes/new" element={<PageNewBoxes />} />
                <Route path="/admin/boxes/:id" element={<PageEditBox />} />
                <Route path="/admin/boxes/:id/edit" element={<PageEditBox />} />
              </Route>
              <Route Component={PublicLayout}>
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </BoxesContextWrapper>
      </ContainersContextWrapper>
    </UserContextWrapper>
  );
}
