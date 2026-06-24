import React, { useEffect, useState } from "react";
import ContainerLayout from "../../layouts/ContainerLayout";
import Image from "next/image";
import { useRouter } from "next/router";
import Loading from "../loading";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { RiArrowLeftSLine } from "react-icons/ri";

const SingleBlogHeader = () => {
  const router = useRouter();
  const slug = router.query.id;
  const [item, setItem] = useState(null);
  const [relatedPosts, setRelatedPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!router.isReady || typeof slug !== "string") return;

    let mounted = true;

    async function loadPost() {
      try {
        setLoading(true);

        const [postResponse, postsResponse] = await Promise.all([
          fetch(`/api/wordpress-posts?slug=${encodeURIComponent(slug)}`),
          fetch("/api/wordpress-posts?perPage=6"),
        ]);

        const [post, posts] = await Promise.all([
          postResponse.json(),
          postsResponse.json(),
        ]);

        if (mounted) {
          setItem(post);
          setRelatedPosts(
            Array.isArray(posts)
              ? posts.filter((postItem) => postItem.slug !== slug).slice(0, 3)
              : []
          );
        }
      } catch (error) {
        if (mounted) {
          setItem(null);
          setRelatedPosts([]);
        }
      } finally {
        if (mounted) {
          setLoading(false);
        }
      }
    }

    loadPost();

    return () => {
      mounted = false;
    };
  }, [router.isReady, slug]);

  useEffect(() => {
    window?.scrollTo(0, 0);
  }, []);

  if (!router.isReady || loading) {
    return (
      <ContainerLayout>
        <div className="w-full py-24">
          <Loading isFullScreen={false} />
        </div>
      </ContainerLayout>
    );
  }

  if (!item) {
    return (
      <ContainerLayout>
        <div className="w-full py-24 text-center text-[#555]">
          Article not found.
        </div>
      </ContainerLayout>
    );
  }

  return (
    <ContainerLayout>
      <div className="w-full flex flex-col pt-4 flow-hide mt-8 pb-20">
        <button
          type="button"
          onClick={() => router.push("/blog")}
          className="inline-flex items-center gap-1 self-start text-mainBlue font-medium mb-6"
        >
          <RiArrowLeftSLine className="text-2xl" />
          Back to blog
        </button>

        <div className="w-full rounded-[28px] border border-[#E4E7FF] bg-[#F7F8FF] p-4 lg:p-6">
          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.6fr)_minmax(280px,0.7fr)] items-start">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-[12px] lg:text-sm">
                <span className="rounded-full bg-white px-3 py-1 text-[#4747D6] border border-[#D8DBFF]">
                  Blog
                </span>
                <span className="text-[#666]">{item.date}</span>
                {item.readingTime ? (
                  <span className="text-[#666]">{item.readingTime} min read</span>
                ) : null}
                {item.authorName ? (
                  <span className="text-[#666]">By {item.authorName}</span>
                ) : null}
              </div>

              <div>
                <h1 className="max-w-4xl text-[32px] leading-[1.12] lg:text-[54px] font-semibold text-[#151541]">
                  {item.title}
                </h1>
                <p className="mt-4 max-w-3xl text-[15px] lg:text-[18px] leading-8 text-[#555]">
                  {item.description}
                </p>
              </div>

              <div className="overflow-hidden rounded-[24px] border border-[#E4E7FF] bg-white">
                {typeof item.image === "string" ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[620px] object-cover"
                  />
                ) : (
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full max-h-[620px] object-cover"
                  />
                )}
              </div>
            </div>

            <aside className="lg:sticky lg:top-6 space-y-4">
              <div className="rounded-[24px] border border-[#E4E7FF] bg-white p-5">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#777]">
                  Share article
                </p>
                <div className="mt-4 flex items-center gap-4">
                  <AiFillLinkedin className="text-2xl cursor-pointer text-[#333] hover:text-mainBlue" />
                  <BsFacebook className="text-2xl cursor-pointer text-[#333] hover:text-mainBlue" />
                  <AiFillInstagram className="text-2xl cursor-pointer text-[#333] hover:text-mainBlue" />
                  <AiFillTwitterCircle className="text-2xl cursor-pointer text-[#333] hover:text-mainBlue" />
                </div>
              </div>

              <div className="rounded-[24px] border border-[#E4E7FF] bg-white p-5">
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#777]">
                  Article summary
                </p>
                <p className="mt-4 text-[15px] leading-7 text-[#444]">
                  {item.description}
                </p>
              </div>

              {item.categories?.length ? (
                <div className="rounded-[24px] border border-[#E4E7FF] bg-white p-5">
                  <p className="text-[12px] uppercase tracking-[0.18em] text-[#777]">
                    Categories
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.categories.map((category) => (
                      <span
                        key={category}
                        className="rounded-full border border-[#D8DBFF] bg-[#F7F8FF] px-3 py-1 text-sm text-[#4747D6]"
                      >
                        {category}
                      </span>
                    ))}
                  </div>
                </div>
              ) : null}
            </aside>
          </div>
        </div>

        <div className="mt-12 max-w-5xl">
          <div
            className="blog-content text-[#333] text-[16px] lg:text-[18px] leading-[1.9] [&_p]:mb-6 [&_h2]:mt-10 [&_h2]:mb-4 [&_h2]:text-[26px] [&_h2]:lg:text-[34px] [&_h2]:leading-tight [&_h2]:text-[#151541] [&_h3]:mt-8 [&_h3]:mb-4 [&_h3]:text-[22px] [&_h3]:lg:text-[28px] [&_h3]:leading-tight [&_h3]:text-[#151541] [&_a]:text-mainBlue [&_a]:underline [&_img]:my-8 [&_img]:rounded-[22px] [&_img]:shadow-sm [&_ul]:mb-6 [&_ol]:mb-6 [&_ul]:pl-6 [&_ol]:pl-6 [&_ul]:list-disc [&_ol]:list-decimal"
            dangerouslySetInnerHTML={{ __html: item.content || item.excerpt }}
          />
        </div>

        {relatedPosts.length ? (
          <div className="mt-16">
            <div className="flex items-end justify-between gap-4 mb-6">
              <div>
                <p className="text-[12px] uppercase tracking-[0.18em] text-[#777]">
                  More to read
                </p>
                <h2 className="mt-2 text-[24px] lg:text-[32px] font-semibold text-[#151541]">
                  Related posts
                </h2>
              </div>
              <button
                type="button"
                onClick={() => router.push("/blog")}
                className="hidden lg:inline-flex items-center justify-center rounded-full border border-[#D8DBFF] bg-white px-5 py-3 text-mainBlue font-medium hover:bg-[#F7F8FF]"
              >
                View all
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
              {relatedPosts.map((post, index) => (
                <article
                  className="overflow-hidden rounded-[24px] border border-[#E4E7FF] bg-white"
                  key={post.slug || index}
                >
                  <div className="aspect-[4/3] overflow-hidden bg-[#F2F3FF]">
                    {typeof post.image === "string" ? (
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    ) : (
                      <Image
                        src={post.image}
                        alt={post.title}
                        className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-[12px] text-[#777]">{post.date}</p>
                    <h3 className="mt-3 text-[20px] font-semibold leading-[1.35] text-[#151541] line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="mt-3 text-[15px] leading-7 text-[#555] line-clamp-3">
                      {post.description}
                    </p>
                    <button
                      type="button"
                      onClick={() => router.push(post.path)}
                      className="mt-5 inline-flex items-center justify-center rounded-full bg-[#4747D6] px-5 py-3 text-white font-medium hover:bg-[#3333b3]"
                    >
                      Read
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </ContainerLayout>
  );
};

export default SingleBlogHeader;
