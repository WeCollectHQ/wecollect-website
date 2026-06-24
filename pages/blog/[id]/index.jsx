import React from "react";
import SingleBlogHeader from "../../../components/blogs/SingleBlogHeader";
import NewNavbar from "../../../components/navbar/new-navbar";
import RequestDemo from "../../../components/footer/request-demo";
import NewFooter from "../../../components/footer/new-footer";
import Head from "next/head";
const index = () => {
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
