import { blogs as fallbackBlogs } from "./blogData";

const WORDPRESS_BASE_URL = "https://blog.wecollect.tech/wp-json/wp/v2/posts";

function buildWordPressEndpoint({ perPage = 3, slug } = {}) {
  const params = new URLSearchParams();
  params.set("per_page", String(perPage));
  params.set("_embed", "1");

  if (slug) {
    params.set("slug", slug);
  }

  return `${WORDPRESS_BASE_URL}?${params.toString()}`;
}

function stripHtml(value = "") {
  return String(value)
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getFeaturedImage(post) {
  return (
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    post?.uagb_featured_image_src?.full?.[0] ||
    ""
  );
}

export function mapWordPressPost(post) {
  const slug = post?.slug || "";
  const authorName = post?._embedded?.author?.[0]?.name || "";
  const categories = post?._embedded?.["wp:term"]?.[0] || [];
  const readingTime = Math.max(
    1,
    Math.round(stripHtml(post?.content?.rendered || "").split(/\s+/).filter(Boolean).length / 200)
  );

  return {
    title: post?.title?.rendered ? stripHtml(post.title.rendered) : "",
    description: stripHtml(post?.excerpt?.rendered || ""),
    date: formatDate(post?.date_gmt || post?.date),
    image: getFeaturedImage(post),
    slug,
    path: slug ? `/blog/${slug}` : "#",
    wordpressUrl: post?.link || "#",
    content: post?.content?.rendered || "",
    excerpt: post?.excerpt?.rendered || "",
    authorName,
    categories: categories.map((category) => category?.name).filter(Boolean),
    readingTime,
  };
}

export async function fetchWordPressBlogs({ perPage = 3 } = {}) {
  try {
    const response = await fetch(buildWordPressEndpoint({ perPage }));

    if (!response.ok) {
      throw new Error(`WordPress request failed with ${response.status}`);
    }

    const posts = await response.json();
    return Array.isArray(posts) && posts.length > 0
      ? posts.map(mapWordPressPost)
      : fallbackBlogs;
  } catch (error) {
    return fallbackBlogs;
  }
}

export async function fetchWordPressPostBySlug(slug) {
  try {
    if (!slug) return null;

    const response = await fetch(buildWordPressEndpoint({ perPage: 1, slug }));

    if (!response.ok) {
      throw new Error(`WordPress request failed with ${response.status}`);
    }

    const posts = await response.json();
    return Array.isArray(posts) && posts.length > 0 ? mapWordPressPost(posts[0]) : null;
  } catch (error) {
    return null;
  }
}
