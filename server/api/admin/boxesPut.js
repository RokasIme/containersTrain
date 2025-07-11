import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";
import fs from "fs/promises";
import path from "path";

export async function boxesPut(req, res) {
  const [err, msg] = IsValid.requiredFields(
    req.body,
    [
      { field: "name", validation: IsValid.nonEmptyString },
      { field: "container", validation: IsValid.nonEmptyString },
      { field: "flammable", validation: IsValid.positiveInteger },
      { field: "perishable", validation: IsValid.positiveInteger },
    ],
    [
      { field: "img", validation: IsValid.nonEmptyString },
      { field: "weight", validation: IsValid.positiveInteger },
    ]
  );

  if (err) {
    return res.json({
      status: "error",
      msg: msg,
    });
  }

  let oldThumbnail = null;
  try {
    const [rows] = await connection.execute("SELECT thumbnail FROM boxes WHERE id = ?", [+req.params.id]);
    if (rows.length > 0) {
      oldThumbnail = rows[0].thumbnail;
    }
  } catch (error) {
    console.log("Klaida gaunant esamą thumbnail:", error);
  }
  const { img, name, container, flammable, perishable, weight } = req.body;

  try {
    const sqlColumns = ["name", "container_id", "flammable", "perishable"];
    const sqValues = [name, +container, flammable, perishable];
    if (img) {
      sqlColumns.push("thumbnail");
      sqValues.push(img);
    }
    if (weight) {
      sqlColumns.push("weight");
      sqValues.push(weight);
    }

    const sql = `UPDATE boxes SET ${sqlColumns.map((s) => s + " = ?").join(", ")} WHERE id = ?;`;
    const [result] = await connection.execute(sql, [...sqValues, +req.params.id]);

    if (result.affectedRows !== 1) {
      return res.json({
        status: "error",
        msg: "Serverio klaida, pabandykite veliau2",
      });
    }
    if (oldThumbnail && img && oldThumbnail !== img) {
      const oldImagePath = path.join(process.cwd(), "public", "img", "thumbnails", oldThumbnail);
      try {
        await fs.unlink(oldImagePath);
      } catch (err) {}
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: "error",
      msg: "Serverio klaida, pabandykite veliau3",
    });
  }

  return res.json({
    status: "success",
    msg: "Eilutė sukurta sekmingai",
  });
}
