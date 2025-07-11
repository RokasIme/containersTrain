import { connection } from "../../db.js";
import { IsValid } from "../../lib/IsValid.js";

export async function containersPost(req, res) {
  const [err, msg] = IsValid.requiredFields(req.body, [{ field: "size", validation: IsValid.nonEmptyString }]);

  if (err) {
    return res.json({
      status: "error",
      msg: msg,
    });
  }

  const { size } = req.body;

  try {
    const sql = "INSERT INTO containers (size) VALUES (?);";
    const [result] = await connection.execute(sql, [size]);

    if (result.affectedRows !== 1) {
      return res.json({
        status: "error",
        msg: "Serverio klaida, pabandykite konteinerį sukurti veliau",
      });
    }
  } catch (error) {
    console.log(error);
    return res.json({
      status: "error",
      msg: "Serverio klaida, pabandykite konteineri sukurti veliau",
    });
  }

  return res.json({
    status: "success",
    msg: "Sukurta nauja konteinerio eilutė",
  });
}
