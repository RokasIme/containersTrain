import express from "express";
import { getLogout } from "../api/admin/getLogout.js";
import { moviesGet } from "../api/admin/moviesGet.js";
import { moviesPost } from "../api/admin/moviesPost.js";
import { moviesPut } from "../api/admin/moviesPut.js";
import { moviesDelete } from "../api/admin/moviesDelete.js";
import { movieBySlugGet } from "../api/admin/movieBySlugGet.js";
import { moviesByCategoryGet } from "../api/admin/moviesByCategoryGet.js";
import { categoriesDelete } from "../api/admin/categoriesDelete.js";
import { containersPut } from "../api/admin/containersPut.js";
import { apiUpload } from "../api/admin/apiUpload.js";
import { uploadMovieThumbnailImage } from "../middleware/uploadThumbnail.js";
import { containersPost } from "../api/admin/containersPost.js";

export const adminApiRouter = express.Router();

adminApiRouter.get("/logout", getLogout);

adminApiRouter.get("/movies", moviesGet);
adminApiRouter.post("/movies", moviesPost);
adminApiRouter.put("/movies/:id", moviesPut);
adminApiRouter.delete("/movies/:id", moviesDelete);

adminApiRouter.get("/movies/:slug", movieBySlugGet);

adminApiRouter.get("/movies-by-category/:slug", moviesByCategoryGet);

adminApiRouter.post("/containers", containersPost);
adminApiRouter.put("/containers/:id", containersPut);
adminApiRouter.delete("/containers/:id", categoriesDelete);

adminApiRouter.post("/upload", uploadMovieThumbnailImage.single("thumbnail"), apiUpload);

adminApiRouter.all("*error", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "No such admin API route exists",
  });
});
