import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function boxesPost(req, res) {
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
      { field: "weight", validation: IsValid.nonEmptyString },
    ]
  );

  if (err) {
    return res.json({
      status: "error",
      msg: msg,
    });
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

    const sql = `INSERT INTO boxes (${sqlColumns.join(", ")}) VALUES (?${", ?".repeat(sqlColumns.length - 1)});`;
    const [result] = await connection.execute(sql, sqValues);

    if (result.affectedRows !== 1) {
      return res.json({
        status: "error",
        msg: "Serverio klaida, pabandykite veliau2",
      });
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
