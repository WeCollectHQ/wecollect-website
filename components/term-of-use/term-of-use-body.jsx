import React from "react";
import ContainerLayout from "../../layouts/ContainerLayout";

const contents = [
  {
    storyList: [],
    title: "Introduction",
    story: `Welcome to WeCollect. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree to these terms, you should not use this site. `,
  },
  {
    storyList: [],
    title: "Acceptance of Terms",
    story: `By using WeCollect's website, you agree to be bound by these Terms of Use and any other applicable terms and conditions and policies, including our Privacy Policy and Cookie Policy.
`,
  },
  {
    storyList: [],
    title: "Use of the Website",
    story: ` You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website
`,
  },
  {
    storyList: [],
    title: "Intellectual Property Rights",
    story: `All content on this website, including text, graphics, logos, icons, images, audio clips, and software, is the property of WeCollect or its content suppliers and is protected by international copyright laws. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from this website without prior written consent from WeCollect.
`,
  },
  {
    storyList: [],
    title: " User Accounts",
    story: `If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
`,
  },
  {
    storyList: [],
    title: " Limitation of Liability",
    story: `WeCollect will not be liable for any damages of any kind arising from the use of this site, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
`,
  },
  {
    storyList: [],
    title: "Links to Third-Party Sites",
    story: ` Our website may contain links to third-party websites that are not owned or controlled by WeCollect. WeCollect has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites. By using this website, you expressly relieve WeCollect from any and all liability arising from your use of any third-party website.
`,
  },
  {
    storyList: [],
    title: " Disclaimer",
    story: ` The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
`,
  },
  {
    storyList: [],
    title: "Changes to These Terms",
    story: ` WeCollect reserves the right to modify these terms at any time, so please review it frequently. If we make changes to these terms, we will post the revised terms here. Your continued use of the website after such changes have been posted will constitute your acceptance of the changes.
`,
  },
  {
    storyList: [],
    title: "Governing Law",
    story: ` These terms are governed by and construed in accordance with the laws of [Your Country], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
`,
  },
  {
    storyList: [
      `By using WeCollect's website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.`,
    ],
    title: "Contact Information",
    story: ` If you have any questions about these Terms of Use, please contact us at hello@wecollect.tech.
`,
  },
];
const TermOfUseBody = () => {
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

export default TermOfUseBody;
