"use client";

import { FooterSection } from "@/components/ui/footer-section";

export default function TermsOfService() {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="container mx-auto px-4 py-12 md:px-6 max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground mb-8">Last Updated: May 4, 2025</p>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Introduction</h2>
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the PimpMyBikeSG website and detailing services 
              (collectively, the &ldquo;Services&rdquo;) operated by PimpMyBikeSG (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By accessing our website, 
              booking our services, or using our Services, you agree to be bound by these Terms. If you disagree with any 
              part of the Terms, you may not access the Services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Service Description</h2>
            <p className="mb-4">
              PimpMyBikeSG provides motorcycle detailing services including but not limited to washing, polishing, 
              waxing, ceramic coating, glass coating, chain maintenance, and related services. Our detailing packages 
              vary in scope and price as described on our website.
            </p>
            <p>
              We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time, with or 
              without notice. We may also impose limits on certain features or restrict access to parts or all of the 
              Services without liability.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Appointments and Scheduling</h2>
            <p className="mb-4">
              Service appointments may be scheduled through our website, via Telegram, or by phone. Confirmation of your 
              appointment will be provided via your preferred contact method.
            </p>
            <p className="mb-4">
              We require timely arrival for your scheduled appointment. If you are running late, please contact us as soon 
              as possible. We may need to reschedule appointments if you are more than 15 minutes late, depending on our schedule.
            </p>
            <p>
              We request at least 24 hours&apos; notice for cancellations or rescheduling. For no-shows or cancellations with less 
              than 24 hours&apos; notice, we reserve the right to charge a cancellation fee of up to 50% of the service price.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Customer Responsibilities</h2>
            <p className="mb-4">By using our Services, you agree to:</p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide accurate and complete information about your motorcycle</li>
              <li>Remove personal belongings from your motorcycle before service</li>
              <li>Disclose any known issues, damages, or special conditions of your motorcycle</li>
              <li>Follow any aftercare instructions provided by our technicians</li>
              <li>Pay for services in accordance with our payment terms</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Payment Terms</h2>
            <p className="mb-4">
              Payment is due upon completion of services unless other arrangements have been made in advance. We accept 
              various payment methods as indicated at the time of booking or payment.
            </p>
            <p className="mb-4">
              Prices for our services are subject to change without notice. We reserve the right to modify or discontinue 
              any service or pricing at any time.
            </p>
            <p>
              For certain services, especially premium packages, we may require a deposit at the time of booking. Deposit 
              amounts and refund policies will be clearly communicated at the time of booking.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Service Guarantees and Warranties</h2>
            <p className="mb-4">
              We strive to provide high-quality detailing services and stand behind our work. Specific warranties or 
              guarantees for services like ceramic coating or glass coating will be provided in writing at the time of service.
            </p>
            <p className="mb-4">
              If you are not satisfied with our services, please notify us within 48 hours of service completion, and we 
              will make reasonable efforts to address your concerns.
            </p>
            <p>
              Our service guarantees do not cover damage resulting from accidents, improper maintenance, or normal wear and 
              tear after the service is completed.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Limitation of Liability</h2>
            <p className="mb-4">
              To the maximum extent permitted by law, PimpMyBikeSG shall not be liable for any indirect, incidental, special, 
              consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, 
              or any loss of data, use, goodwill, or other intangible losses, resulting from:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Your use or inability to use our Services</li>
              <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
              <li>Any pre-existing damage not caused by our services</li>
              <li>Damage resulting from improper aftercare or maintenance</li>
            </ul>
            <p>
              Our total liability for any claim arising from or related to our Services shall not exceed the total amount 
              paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              The PimpMyBikeSG name, logo, website, and all content, features, and functionality are owned by PimpMyBikeSG 
              and are protected by Singapore and international copyright, trademark, patent, trade secret, and other 
              intellectual property or proprietary rights laws.
            </p>
            <p>
              You may not use, reproduce, distribute, modify, create derivative works of, publicly display, publicly 
              perform, republish, download, store, or transmit any of the material on our website, except as generally 
              and ordinarily permitted through the website according to these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of Singapore, without regard to 
              its conflict of law provisions. Any dispute arising from or relating to these Terms or your use of the Services 
              shall be subject to the exclusive jurisdiction of the courts of Singapore.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of significant changes by 
              updating the &ldquo;Last Updated&rdquo; date at the top of this page. Your continued use of the Services after any such 
              changes constitutes your acceptance of the new Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-xl md:text-2xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
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