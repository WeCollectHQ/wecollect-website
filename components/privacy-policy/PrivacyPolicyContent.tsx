import { Container } from "@/components/common/Container";

export function PrivacyPolicyContent() {
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
                Welcome to Wecollect. We are committed to protecting and
                respecting your privacy. This Privacy Policy explains how we
                collect, use, disclose, and safeguard your information when you
                visit our website or use our services. Please read this policy
                carefully to understand our practices regarding your personal
                data and how we will treat it.
              </p>
            </div>

            {/* Information Wecollect */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Information Wecollect
              </h3>
              <div className="text-[14px] leading-[1.7] text-[#686890] flex flex-col gap-3">
                <p>We may collect and process the following data about you:</p>
                <p>
                  Personal Information: Name, email address, phone number, and
                  other contact details provided when you register an account or
                  contact us.
                  <br />
                  Usage Data: Information about how you use our website,
                  including IP address, browser type, pages visited, and
                  duration of visit.
                  <br />
                  Cookies: For more information, please refer to our Cookie
                  Policy.
                </p>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                How We Use Your Information
              </h3>
              <div className="text-[14px] leading-[1.7] text-[#686890] flex flex-col gap-3">
                <p>We use the information we collect in the following ways:</p>
                <p>
                  To provide and maintain our services to you.
                  <br />
                  To improve our website and services.
                  <br />
                  To communicate with you, including responding to your
                  inquiries and providing customer support.
                  <br />
                  To personalize your experience and deliver content and
                  advertisements tailored to your interests.
                  <br />
                  To comply with legal obligations.
                </p>
              </div>
            </div>

            {/* Sharing Your Information */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Sharing Your Information
              </h3>
              <div className="text-[14px] leading-[1.7] text-[#686890] flex flex-col gap-3">
                <p>
                  We may share your information with third parties only in the
                  following circumstances:
                </p>
                <p>
                  With your consent.
                  <br />
                  To comply with legal obligations or protect our rights.
                  <br />
                  With service providers who perform services on our behalf
                </p>
              </div>
            </div>

            {/* Data Security */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Data Security
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                We take appropriate measures to protect your information from
                unauthorized access, alteration, disclosure, or destruction.
                However, no method of transmission over the internet or
                electronic storage is completely secure.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Your Rights
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                You have the right to access, correct, or delete your personal
                information. You may also object to the processing of your
                personal data in certain circumstances.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Children's Privacy
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                Our website is not intended for children under the age of 13. We
                do not knowingly collect personal information from children.
              </p>
            </div>

            {/* Changes to This Privacy Policy */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Changes to This Privacy Policy
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page
              </p>
            </div>

            {/* Contact Us */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Contact Us
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                If you have any questions about this Privacy Policy or our data
                practices, please contact us at hello@Wecollect.tech By using
                Wecollect's website, you consent to the terms of this Privacy
                Policy.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
