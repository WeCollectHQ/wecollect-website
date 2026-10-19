const WORDPRESS_BASE_URL = (
  process.env.WORDPRESS_BASE_URL ||
  "https://blog.Wecollect.tech/wp-json/wp/v2/posts"
)
  .replace(/["';]/g, "")
  .trim();

export interface WordPressPost {
  title: string;
  description: string;
  date: string;
  image: string;
  slug: string;
  path: string;
  wordpressUrl: string;
  content: string;
  excerpt: string;
  authorName: string;
  categories: string[];
  readingTime: number;
}

function buildWordPressEndpoint({
  perPage = 10,
  slug,
}: { perPage?: number; slug?: string } = {}) {
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
    .replace(/&#8217;/g, "'")
    .replace(/&#8220;/g, '"')
    .replace(/&#8221;/g, '"')
    .replace(/&#8211;/g, "-")
    .replace(/&#8212;/g, "--")
    .replace(/&hellip;/g, "...")
    .replace(/\s+/g, " ")
    .trim();
}

function formatDate(value: string | undefined) {
  if (!value) return "";

  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(date);
}

function getFeaturedImage(post: any) {
  return (
    post?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    post?.uagb_featured_image_src?.full?.[0] ||
    ""
  );
}

export function mapWordPressPost(post: any): WordPressPost {
  const slug = post?.slug || "";
  const authorName = post?._embedded?.author?.[0]?.name || "Wecollect Team";

  // Extract category names (handling undefined or empty arrays)
  const categoryTerms = post?._embedded?.["wp:term"]?.[0] || [];
  const categories = categoryTerms.map((c: any) => c?.name).filter(Boolean);

  const readingTime = Math.max(
    1,
    Math.round(
      stripHtml(post?.content?.rendered || "")
        .split(/\s+/)
        .filter(Boolean).length / 200,
    ),
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
    excerpt: stripHtml(post?.excerpt?.rendered || ""),
    authorName,
    categories: categories.length > 0 ? categories : ["Blog"],
    readingTime,
  };
}

export async function fetchWordPressBlogs({
  perPage = 10,
}: { perPage?: number } = {}): Promise<WordPressPost[]> {
  try {
    const response = await fetch(buildWordPressEndpoint({ perPage }), {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`WordPress request failed with ${response.status}`);
    }

    const posts = await response.json();
    return Array.isArray(posts) && posts.length > 0
      ? posts.map(mapWordPressPost)
      : [];
  } catch (error) {
    console.error("Failed to fetch WordPress blogs", error);
    return [];
  }
}

export async function fetchWordPressPostBySlug(
  slug: string,
): Promise<WordPressPost | null> {
  try {
    if (!slug) return null;

    const response = await fetch(buildWordPressEndpoint({ perPage: 1, slug }), {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      throw new Error(`WordPress request failed with ${response.status}`);
    }

    const posts = await response.json();
    return Array.isArray(posts) && posts.length > 0
      ? mapWordPressPost(posts[0])
      : null;
  } catch (error) {
    console.error(`Failed to fetch WordPress post: ${slug}`, error);
    return null;
  }
}
