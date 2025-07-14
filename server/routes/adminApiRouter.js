import express from "express";
import { getLogout } from "../api/admin/getLogout.js";
import { containersDelete } from "../api/admin/containersDelete.js";
import { containersPut } from "../api/admin/containersPut.js";
import { apiUpload } from "../api/admin/apiUpload.js";
import { uploadThumbnailImage } from "../middleware/uploadThumbnail.js";
import { containersPost } from "../api/admin/containersPost.js";
import { boxesDelete } from "../api/admin/boxesDelete.js";
import { boxesPost } from "../api/admin/boxesPost.js";
import { boxesPut } from "../api/admin/boxesPut.js";

export const adminApiRouter = express.Router();

adminApiRouter.get("/logout", getLogout);

adminApiRouter.post("/boxes", boxesPost);
adminApiRouter.put("/boxes/:id", boxesPut);
adminApiRouter.delete("/boxes/:id", boxesDelete);

adminApiRouter.post("/containers", containersPost);
adminApiRouter.put("/containers/:id", containersPut);
adminApiRouter.delete("/containers/:id", containersDelete);

adminApiRouter.post("/upload", uploadThumbnailImage.single("thumbnail"), apiUpload);

adminApiRouter.all("*error", (req, res) => {
  return res.status(404).json({
    status: "error",
    msg: "No such admin API route exists",
  });
});
