import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";

const contents = [
  {
    storyList: [],
    title: "Introduction",
    story: `Welcome to WeCollect. We are committed to protecting and respecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully to understand our practices regarding your personal data and how we will treat it. `,
  },
  {
    storyList: [
      `Personal Information: Name, email address, phone number, and other contact details provided when you register an account or contact us.`,
      `Usage Data: Information about how you use our website, including IP address, browser type, pages visited, and duration of visit.`,
      `Cookies: For more information, please refer to our Cookie Policy.`,
    ],
    title: "Information WeCollect",
    story: `We may collect and process the following data about you:.
`,
  },
  {
    storyList: [
      "To provide and maintain our services to you.",

      `To improve our website and services.`,
      `To communicate with you, including responding to your inquiries and providing customer support.`,
      `To personalize your experience and deliver content and advertisements tailored to your interests.`,
      `To comply with legal obligations.`,
    ],
    title: "How We Use Your Information",
    story: `We use the information we collect in the following ways:
`,
  },
  {
    storyList: [
      `With your consent.`,
      `To comply with legal obligations or protect our rights.`,
      `With service providers who perform services on our behalf`,
    ],
    title: "Sharing Your Information",
    story: `We may share your information with third parties only in the following circumstances:`,
  },
  {
    storyList: [],
    title: " Data Security",
    story: `We take appropriate measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure.`,
  },
  {
    storyList: [],
    title: "Your Rights",
    story: `You have the right to access, correct, or delete your personal information. You may also object to the processing of your personal data in certain circumstances.`,
  },
  {
    storyList: [],
    title: " Children's Privacy",
    story: `Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children.`,
  },
  {
    storyList: [],
    title: "Changes to This Privacy Policy",
    story: `We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page`,
  },
  {
    storyList: [],
    title: "Contact Us",
    story: `If you have any questions about this Privacy Policy or our data practices, please contact us at hello@wecollect.tech
By using WeCollect's website, you consent to the terms of this Privacy Policy.
`,
  },
];
const PrivacyBody = () => {
  return (
    <ContainerLayout>
      <div className="w-full flex flex-col gap-y-10 flow-hide">
        {contents?.map((item) => {
          return (
            <div className="w-full flex flex-col gap-4">
              <h1
                className=" lg:text-2xl  2xl:text-[40px] font-medium text-customBlack font-serif  "
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

export default PrivacyBody;
