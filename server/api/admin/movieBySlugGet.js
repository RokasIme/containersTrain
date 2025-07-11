import { connection } from "../../db.js";

export async function movieBySlugGet(req, res) {
  try {
    const sql = `
            SELECT movies.*,
                categories.name as categoryName,
                categories.url_slug as categoryUrlSlug
            FROM movies
            INNER JOIN categories
                ON categories.id = movies.category_id
            WHERE movies.url_slug = ?;`;
    const [result] = await connection.execute(sql, [req.params.slug]);
    return res.json({
      status: "success",
      data: result,
    });
  } catch (error) {
    console.log(error);

    return res.status(500).json({
      status: "error",
      data: [],
      msg: "Serverio klaida",
    });
  }
}
