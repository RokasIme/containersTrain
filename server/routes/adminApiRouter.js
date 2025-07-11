import express from "express";
import { getLogout } from "../api/admin/getLogout.js";
import { moviesPost } from "../api/admin/moviesPost.js";
import { moviesPut } from "../api/admin/moviesPut.js";
import { movieBySlugGet } from "../api/admin/movieBySlugGet.js";
import { moviesByCategoryGet } from "../api/admin/moviesByCategoryGet.js";
import { containersDelete } from "../api/admin/containersDelete.js";
import { containersPut } from "../api/admin/containersPut.js";
import { apiUpload } from "../api/admin/apiUpload.js";
import { uploadMovieThumbnailImage } from "../middleware/uploadThumbnail.js";
import { containersPost } from "../api/admin/containersPost.js";
import { boxesDelete } from "../api/admin/boxesDelete.js";

export const adminApiRouter = express.Router();

adminApiRouter.get("/logout", getLogout);

adminApiRouter.post("/boxes", moviesPost);
adminApiRouter.put("/boxes/:id", moviesPut);
adminApiRouter.delete("/boxes/:id", boxesDelete);

adminApiRouter.get("/movies/:slug", movieBySlugGet);

adminApiRouter.get("/movies-by-category/:slug", moviesByCategoryGet);

adminApiRouter.post("/containers", containersPost);
adminApiRouter.put("/containers/:id", containersPut);
adminApiRouter.delete("/containers/:id", containersDelete);

adminApiRouter.post("/upload", uploadMovieThumbnailImage.single("thumbnail"), apiUpload);

adminApiRouter.all("*error", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "No such admin API route exists",
  });
});
