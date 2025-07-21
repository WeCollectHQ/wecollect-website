import React from "react";
import SingleBlogHeader from "../../../components/blogs/SingleBlogHeader";
import Footer from "../../../components/LandingPage/Footer";
import { useRouter } from "next/router";
import { blogPosts } from "../../../utils/blog-data";
import NewNavbar from "../../../components/navbar/new-navbar";
import RequestDemo from "../../../components/footer/request-demo";
import NewFooter from "../../../components/footer/new-footer";
import Head from "next/head";
const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const item = blogPosts[id];

  return (
    <div className="w-full flex flex-col">
      <Head>
        <title>Blog</title>
        <meta
          name="description"
          content="Leverage advanced data-collecting technology and numerous field agents to access and track data for various projects."
        />
        <link rel="icon" href="/wecollect-new-logo.png" />
      </Head>

      <NewNavbar />
      <SingleBlogHeader />
      <RequestDemo />
      <NewFooter />
    </div>
  );
};

export default index;
