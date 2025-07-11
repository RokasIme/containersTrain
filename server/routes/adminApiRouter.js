import express from "express";
import { getLogout } from "../api/admin/getLogout.js";
import { moviesGet } from "../api/admin/moviesGet.js";
import { moviesPost } from "../api/admin/moviesPost.js";
import { moviesPut } from "../api/admin/moviesPut.js";
import { moviesDelete } from "../api/admin/moviesDelete.js";
import { movieBySlugGet } from "../api/admin/movieBySlugGet.js";
import { moviesByCategoryGet } from "../api/admin/moviesByCategoryGet.js";
import { categoriesGet } from "../api/admin/categoriesGet.js";
import { categoriesPost } from "../api/admin/categoriesPost.js";
import { categoriesDelete } from "../api/admin/categoriesDelete.js";
import { categoriesPut } from "../api/admin/categoriesPut.js";
import { apiUpload } from "../api/admin/apiUpload.js";
import { uploadMovieThumbnailImage } from "../middleware/uploadThumbnail.js";

export const adminApiRouter = express.Router();

adminApiRouter.get("/logout", getLogout);

adminApiRouter.get("/movies", moviesGet);
adminApiRouter.post("/movies", moviesPost);
adminApiRouter.put("/movies/:id", moviesPut);
adminApiRouter.delete("/movies/:id", moviesDelete);

adminApiRouter.get("/movies/:slug", movieBySlugGet);

adminApiRouter.get("/movies-by-category/:slug", moviesByCategoryGet);

adminApiRouter.get("/categories", categoriesGet);
adminApiRouter.post("/categories", categoriesPost);
adminApiRouter.put("/categories/:id", categoriesPut);
adminApiRouter.delete("/categories/:id", categoriesDelete);

adminApiRouter.post("/upload", uploadMovieThumbnailImage.single("thumbnail"), apiUpload);

adminApiRouter.all("*error", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "No such admin API route exists",
  });
});
