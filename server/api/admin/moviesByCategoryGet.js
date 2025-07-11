import { connection } from "../../db.js";

export async function moviesByCategoryGet(req, res) {
  try {
    const sql = `
            SELECT *
            FROM movies
            WHERE category_id = (SELECT id FROM categories WHERE url_slug = ?);`;
    const [result] = await connection.execute(sql, [req.params.slug]);
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
