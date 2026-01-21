export default function PrivacyPolicyPage() {
  return (
    <main className="bg-[#07090b] text-white min-h-screen">
      <section className="mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-24">
        <div className="space-y-6">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-white/50">
            <span className="h-px w-8 bg-orange-500" />
            Privacy Policy
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-white/60">
            Current as of: December 2025
          </p>
        </div>

        <div className="mt-10 space-y-8 text-white/80 leading-relaxed">
          <p>
            This Privacy Policy describes how Base One (the "Site", "we", "us", or
            "our") collects, uses, and discloses your personal information when you
            visit or make an inquiry through our website.
          </p>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              1. Personal Information We Collect
            </h2>
            <p>When you visit the Site, we collect certain information about your device and your interaction with the Site. We also collect information directly from you via our contact forms, including:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li>Identity Data: Name, business name.</li>
              <li>Contact Data: Email address, phone number.</li>
              <li>Message Data: Any information you voluntarily provide in the "Message" or "Inquiry" fields of our forms.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              2. How We Use Your Personal Information
            </h2>
            <p>We use your personal information to provide our services to you, which includes:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li>Responding to your inquiries or providing quotes.</li>
              <li>Communicating with you regarding your service requests.</li>
              <li>Internal record-keeping as required by Australian law.</li>
              <li>Protecting our Site from fraud or spam (via security logs).</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              3. Sharing Your Personal Information
            </h2>
            <p>We do not sell your personal information to third parties. We share your personal information with service providers to help us provide our services. For example:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li>Base One: Our web development and maintenance partner, who manages our website hosting and inquiry systems.</li>
              <li>Resend: The service used to process and deliver our email inquiries.</li>
            </ul>
            <p>We may also share your personal information to comply with applicable laws and regulations or to respond to a lawful request for information we receive.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              4. Storage and Security
            </h2>
            <p>Your data is stored securely on servers managed by our service providers. We take reasonable steps to protect your personal information from misuse, loss, or unauthorized access. However, no method of transmission over the Internet is 100% secure.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              5. Your Rights
            </h2>
            <p>Under the Australian Privacy Act, you have the right to:</p>
            <ul className="list-disc pl-6 space-y-1 text-white/70">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request that your personal information be corrected or deleted.</li>
              <li>Opt-out of any future marketing communications.</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              6. Cookies
            </h2>
            <p>Our website may use cookies to enhance your experience. You can choose to set your web browser to refuse cookies, though some parts of the Site may not function properly as a result.</p>
          </div>

          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-white">
              7. Contact Us
            </h2>
            <p>For more information about our privacy practices, or if you have questions or a complaint, please contact us by email at <a className="text-orange-500 hover:text-orange-400" href="mailto:zacha2080@gmail.com">zacha2080@gmail.com</a> or by mail using the details provided below:</p>
            <p className="text-white/70">
              Base One<br />
              Australia<br />
              ABN: 67 965 178 317
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
