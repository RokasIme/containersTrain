import { connection } from "../../db.js";

export async function getAllBoxes(req, res) {
  try {
    const sql = `
            SELECT boxes.*,
                containers.size AS containerSize,
                containers.id AS containerId
                FROM boxes
            INNER JOIN containers
                ON containers.id = boxes.container_id
            `;
    const [result] = await connection.execute(sql);
    return res.json({
      status: "success",
      list: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "error",
      list: [],
      msg: "Serverio klaida",
    });
  }
}
