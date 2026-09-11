import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";
import { Testimonials } from "@/components/home/Testimonials";
import { fetchWordPressBlogs } from "@/lib/wordpress";

export const revalidate = 3600; // Revalidate page every hour

export default async function BlogPage() {
  const initialPosts = await fetchWordPressBlogs({ perPage: 20 });

  return (
    <>
      <BlogHero />
      <BlogList initialPosts={initialPosts} />
      <Testimonials variant="with-stats" />
    </>
  );
}
