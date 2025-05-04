"use client";

import { FooterSection } from "@/components/ui/footer-section";

export default function PrivacyPolicy() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 md:px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">Last Updated: May 4, 2025</p>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              PimpMyBikeSG (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy and is committed to protecting your personal data. 
              This privacy policy will inform you about how we look after your personal data when you visit our website and 
              use our motorcycle detailing services, and tell you about your privacy rights.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect, use, store and transfer different kinds of personal data about you, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Identity Data</strong>: includes name, username or similar identifier.</li>
              <li><strong>Contact Data</strong>: includes address, email address, and telephone numbers.</li>
              <li><strong>Vehicle Data</strong>: information about your motorcycle including make, model, year, and condition.</li>
              <li><strong>Service Data</strong>: information about the services you have purchased from us and scheduling preferences.</li>
              <li><strong>Technical Data</strong>: includes internet protocol (IP) address, browser type and version, time zone setting, browser plug-in types and versions, operating system and platform.</li>
              <li><strong>Usage Data</strong>: includes information about how you use our website and services.</li>
              <li><strong>Marketing Data</strong>: includes your preferences in receiving marketing from us.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We use your personal data in the following ways:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>To provide and manage our services to you</li>
              <li>To process and fulfill your appointments and payments</li>
              <li>To manage our relationship with you</li>
              <li>To communicate with you about services, promotions, and events</li>
              <li>To improve our website, services, and customer relationships</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Legal Basis for Processing</h2>
            <p className="mb-4">We collect and use your personal information on the following legal bases:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Performance of a contract when we provide services to you</li>
              <li>Legitimate interests to improve and develop our services</li>
              <li>Consent for specific purposes, such as marketing communications</li>
              <li>Compliance with legal obligations under Singapore law</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Data Retention</h2>
            <p>
              We will only retain your personal data for as long as necessary to fulfill the purposes we collected it for, 
              including for the purposes of satisfying any legal, accounting, or reporting requirements. In general, we keep 
              basic customer information for up to 7 years after your last service with us for tax and accounting purposes.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Your Privacy Rights</h2>
            <p className="mb-4">Under Singapore&apos;s Personal Data Protection Act (PDPA), you have rights regarding your personal data, including:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Right to access personal data we hold about you</li>
              <li>Right to correction of inaccurate personal data</li>
              <li>Right to withdraw consent for specific processing of your data</li>
              <li>Right to data portability in some circumstances</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us at the details provided below. We may need to request specific 
              information from you to help us confirm your identity and ensure your right to access your personal data.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Data Security</h2>
            <p>
              We have implemented appropriate security measures to prevent your personal data from being accidentally lost, 
              used, or accessed in an unauthorized way, altered, or disclosed. We limit access to your personal data to those 
              employees, agents, contractors, and other third parties who have a business need to know.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Third-Party Links</h2>
            <p>
              Our website may include links to third-party websites, plug-ins, and applications. Clicking on those links or 
              enabling those connections may allow third parties to collect or share data about you. We do not control these 
              third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage 
              you to read the privacy policy of every website you visit.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Updates to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. The updated version will be indicated by an updated 
              &ldquo;Last Updated&rdquo; date and the updated version will be effective as soon as it is accessible. We encourage 
              you to review this privacy policy frequently to be informed of how we are protecting your information.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have questions or comments about this policy, or if you would like to exercise your rights regarding 
              your personal data, please contact us at:
            </p>
            <div className="mt-4">
              <p><strong>PimpMyBikeSG</strong></p>
              <p>7A Marsiling Drive</p>
              <p>Singapore, 730007</p>
              <p>Email: info@pimpmybike.sg</p>
              <p>Phone: +65 8791 8141</p>
            </div>
          </section>
        </div>
      </div>
      <FooterSection />
    </div>
  );
} 