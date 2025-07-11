import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function containersPut(req, res) {
  const [errParams, msgParams] = IsValid.requiredFields(req.params, [{ field: "id", validation: IsValid.idAsString }]);

  if (errParams) {
    return res.json({
      status: "error",
      msg: msgParams,
    });
  }

  const [err, msg] = IsValid.requiredFields(req.body, [{ field: "size", validation: IsValid.nonEmptyString }]);

  if (err) {
    return res.json({
      status: "error",
      msg: msg,
    });
  }

  const { size } = req.body;

  try {
    const sql = `
            UPDATE containers
            SET size = ?
            WHERE id = ?;`;
    const [result] = await connection.execute(sql, [size, +req.params.id]);

    if (result.affectedRows !== 1) {
      return res.json({
        status: "error",
        msg: "Serverio klaida, pabandykite atnaujinti veliau",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: "error",
      msg: "Serverio klaida, pabandykite atnaujinti veliau",
    });
  }

  return res.json({
    status: "success",
    msg: "Konteinerio info atnaujinta sekmingai",
  });
}
