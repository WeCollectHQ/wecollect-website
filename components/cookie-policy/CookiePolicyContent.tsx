import { Container } from "@/components/common/Container";

export function CookiePolicyContent() {
  return (
    <section className="w-full bg-white pb-20 md:pb-32">
      <Container>
        <div className="mx-auto max-w-200">
          <div className="border-x border-b border-[#E9E9EF] bg-white p-8 md:p-12 lg:p-16 flex flex-col gap-10">
            {/* Introduction */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Introduction
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                Welcome to Wecollect's website. This Cookie Policy explains how
                we use cookies and similar technologies on our website.
              </p>
            </div>

            {/* What are Cookies? */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                What are Cookies?
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                Cookies are small text files that are stored on your device
                (computer, tablet, smartphone) when you visit a website. They
                are widely used to make websites work more efficiently, as well
                as to provide information to the website owners.
              </p>
            </div>

            {/* Types of Cookies We Use */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Types of Cookies We Use
              </h3>
              <div className="text-[14px] leading-[1.7] text-[#686890] flex flex-col gap-3">
                <p>
                  Essential Cookies: These cookies are necessary for the website
                  to function properly. They enable basic functions like page
                  navigation and access to secure areas of the website. The
                  website cannot function properly without these cookies.
                </p>
                <p>
                  Analytics Cookies: These cookies allow us to analyze how
                  visitors use our website, so we can measure and improve its
                  performance. For example, we use Google Analytics to gather
                  anonymous statistics about how visitors interact with our
                  website.
                </p>
                <p>
                  Functional Cookies: These cookies enable the website to
                  provide enhanced functionality and personalization. They may
                  be set by us or by third-party providers whose services we
                  have added to our pages.
                </p>
                <p>
                  Advertising Cookies: These cookies are used to deliver
                  advertisements that are more relevant to you and your
                  interests. They may also be used to limit the number of times
                  you see an advertisement and measure the effectiveness of
                  advertising campaigns.
                </p>
              </div>
            </div>

            {/* Managing Cookies */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Managing Cookies
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                You can control and/or delete cookies as you wish. You can
                delete all cookies that are already on your computer and you can
                set most browsers to prevent them from being placed. If you do
                this, however, you may have to manually adjust some preferences
                every time you visit a site and some services and
                functionalities may not work.
              </p>
            </div>

            {/* Changes to This Cookie Policy */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Changes to This Cookie Policy
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                We may update this Cookie Policy from time to time in order to
                reflect changes to the cookies we use or for other operational,
                legal, or regulatory reasons. Please revisit this Cookie Policy
                regularly to stay informed about our use of cookies and related
                technologies.
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Contact Us
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                If you have any questions about our use of cookies or this
                Cookie Policy, please contact us at hello@Wecollect.tech.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
