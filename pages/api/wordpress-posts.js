import {
  fetchWordPressBlogs,
  fetchWordPressPostBySlug,
} from "../../utils/wordpressBlogs";

export default async function handler(req, res) {
  try {
    const { slug } = req.query;
    const perPage = req.query.perPage ? Number(req.query.perPage) : 3;
    const posts = slug
      ? await fetchWordPressPostBySlug(String(slug))
      : await fetchWordPressBlogs({ perPage });

    res.setHeader("Cache-Control", "no-store");
    return res.status(200).json(posts);
  } catch (error) {
    return res.status(500).json({ error: "Failed to load WordPress posts" });
  }
}
