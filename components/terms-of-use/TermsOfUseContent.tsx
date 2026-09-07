import { Container } from "@/components/common/Container";

export function TermsOfUseContent() {
  return (
    <section className="w-full bg-white pb-20 md:pb-32">
      <Container>
        <div className="mx-auto max-w-[800px]">
          <div className="border-x border-b border-[#E9E9EF] bg-white p-8 md:p-12 lg:p-16 flex flex-col gap-10">
            
            {/* Introduction */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Introduction
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                Welcome to WeCollect. By accessing and using our website, you agree to comply with and be bound by the following terms and conditions. Please review them carefully. If you do not agree to these terms, you should not use this site.
              </p>
            </div>

            {/* Acceptance of Terms */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Acceptance of Terms
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                By using WeCollect's website, you agree to be bound by these Terms of Use and any other applicable terms and conditions and policies, including our Privacy Policy and Cookie Policy.
              </p>
            </div>

            {/* Use of the Website */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Use of the Website
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                You agree to use the website only for lawful purposes and in a way that does not infringe the rights of, restrict, or inhibit anyone else's use and enjoyment of the website. Prohibited behavior includes harassing or causing distress or inconvenience to any other user, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website
              </p>
            </div>

            {/* Intellectual Property Rights */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Intellectual Property Rights
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                All content on this website, including text, graphics, logos, icons, images, audio clips, and software, is the property of WeCollect or its content suppliers and is protected by international copyright laws. You may not modify, copy, distribute, transmit, display, perform, reproduce, publish, license, create derivative works from, transfer, or sell any information, software, products, or services obtained from this website without prior written consent from WeCollect.
              </p>
            </div>

            {/* User Accounts */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                User Accounts
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                If you create an account on our website, you are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer. You agree to accept responsibility for all activities that occur under your account or password.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Limitation of Liability
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                WeCollect will not be liable for any damages of any kind arising from the use of this site, including, but not limited to, direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </div>

            {/* Links to Third-Party Sites */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Links to Third-Party Sites
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                Our website may contain links to third-party websites that are not owned or controlled by WeCollect. WeCollect has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third-party websites. By using this website, you expressly relieve WeCollect from any and all liability arising from your use of any third-party website.
              </p>
            </div>

            {/* Disclaimer */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Disclaimer
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                The information provided on this website is for general informational purposes only. While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose. Any reliance you place on such information is therefore strictly at your own risk.
              </p>
            </div>

            {/* Changes to These Terms */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Changes to These Terms
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                WeCollect reserves the right to modify these terms at any time, so please review it frequently. If we make changes to these terms, we will post the revised terms here. Your continued use of the website after such changes have been posted will constitute your acceptance of the changes.
              </p>
            </div>

            {/* Governing Law */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Governing Law
              </h3>
              <p className="text-[14px] leading-[1.7] text-[#686890]">
                These terms are governed by and construed in accordance with the laws of [Your Country], and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h3 className="text-[18px] font-bold text-[#5D5D88] mb-3">
                Contact Information
              </h3>
              <div className="text-[14px] leading-[1.7] text-[#686890] flex flex-col gap-5">
                <p>
                  If you have any questions about these Terms of Use, please contact us at hello@wecollect.tech.
                </p>
                <p>
                  By using WeCollect's website, you acknowledge that you have read, understood, and agree to be bound by these terms and conditions.
                </p>
              </div>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
}
