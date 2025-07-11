import { connection } from "../../db.js";

export async function getAllMovies(req, res) {
  try {
    const sql = `
            SELECT movies.*,
                categories.url_slug AS categoryUrlSlug,
                categories.name AS categoryName
            FROM movies
            INNER JOIN categories
                ON categories.id = movies.category_id
            WHERE movies.is_published = 1 AND  categories.is_published = 1;`;
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
