import { BlogHero } from "@/components/blog/BlogHero";
import { BlogList } from "@/components/blog/BlogList";
import { Testimonials } from "@/components/home/Testimonials";

export default function BlogPage() {
  return (
    <>
      <BlogHero />
      <BlogList />
      <Testimonials variant="with-stats" />
    </>
  );
}
