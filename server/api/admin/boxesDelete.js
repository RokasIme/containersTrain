import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";
import fs from "fs/promises";
import path from "path";

export async function boxesDelete(req, res) {
  const [err, msg] = IsValid.requiredFields(req.params, [{ field: "id", validation: IsValid.idAsString }]);

  if (err) {
    return res.json({
      status: "error",
      msg: msg,
    });
  }

  try {
    const boxId = +req.params.id;

    const [rows] = await connection.execute(`SELECT thumbnail FROM boxes WHERE id = ?`, [boxId]);

    if (rows.length === 0) {
      return res.json({ status: "error", msg: "nerasta" });
    }

    const thumbnailFile = rows[0].thumbnail;

    if (thumbnailFile) {
      const imagePath = path.join(process.cwd(), "public", "img", "thumbnails", thumbnailFile);
      try {
        await fs.unlink(imagePath);
      } catch (err) {}
    }

    const [result] = await connection.execute(`DELETE FROM boxes WHERE id = ?`, [boxId]);

    if (result.affectedRows === 1) {
      return res.json({
        status: "success",
        msg: "Ištrinta sėkmingai",
      });
    } else {
      return res.json({
        status: "success",
        msg: "nebuvo ištrinta",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: "error",
      msg: "Serverio klaida",
    });
  }
}
