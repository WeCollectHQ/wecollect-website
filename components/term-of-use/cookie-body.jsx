import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";

const contents = [
  {
    storyList: [],
    title: "Introduction",
    story: `Welcome to WeCollect's website. This Cookie Policy explains how we use cookies and similar technologies on our website. `,
  },
  {
    storyList: [
      `Types of Cookies We Use`,
      `Essential Cookies: These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies.`,
      `Analytics Cookies: These cookies allow us to analyze how visitors use our website, so we can measure and improve its performance. For example, we use Google Analytics to gather anonymous statistics about how visitors interact with our website.`,
      `Functional Cookies: These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages.`,
      `Advertising Cookies: These cookies are used to deliver advertisements that are more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of advertising campaigns.`,
    ],
    title: "What are Cookies?",
    story: `Cookies are small text files that are stored on your device (computer, tablet, smartphone) when you visit a website. They are widely used to make websites work more efficiently, as well as to provide information to the website owners.
`,
  },
  {
    storyList: [],
    title: "Managing Cookies",
    story: `You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.
`,
  },
  {
    storyList: [],
    title: "Changes to This Cookie Policy",
    story: `We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
`,
  },
  {
    storyList: [],
    title: "Contact Us",
    story: ` If you have any questions about our use of cookies or this Cookie Policy, please contact us at hello@wecollect.tech.
`,
  },
];
const CookiesBody = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col gap-y-10 flow-hide">
        {contents?.map((item) => {
          return (
            <div className="w-full flex flex-col gap-4">
              <h1
                className=" lg:text-2xl  2xl:text-[40px] font-medium text-customBlack font-serif"
                // data-aos="fade-up"
                // data-aos-duration="1000"
              >
                {item.title}
              </h1>

              <p
                className=" text-[16px]   2xl:text-xl font-normal text-ash leading-[30px] font-sans "
                // data-aos="fade-up"
                // data-aos-duration="1000"
              >
                {item?.story}
              </p>
              <ul className="flex flex-col gap-2 list-disc">
                {item?.storyList?.map((item, index) => {
                  return (
                    <li
                      className="text-[14px] lg:text-[16px] 2xl:text-[18px] list-disc font-sans"
                      key={index}
                    >
                      {item}
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </ContainerLayout>
  );
};

export default CookiesBody;
