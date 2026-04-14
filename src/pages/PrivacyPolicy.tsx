import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const PrivacyPolicy = () => (
  <Layout>
    <PageHero title="Privacy Policy" subtitle="Effective Date: April 14, 2026" breadcrumb="Home / Privacy Policy" />
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-4xl prose prose-sm">
        <p className="text-muted-foreground leading-relaxed mb-6">This Privacy Policy outlines how HK Global Infotech collects, uses, protects and shares your data while maintaining the highest standards of confidentiality and compliance.</p>
        
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Information We Collect</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li><strong className="text-foreground">Personal Information:</strong> Name, email address, phone number, job title and company details provided voluntarily.</li>
          <li><strong className="text-foreground">Business Data:</strong> Financial records, accounting data, procurement details, payroll information shared to deliver our services.</li>
          <li><strong className="text-foreground">Technical Information:</strong> IP addresses, browser types and system usage data collected through cookies.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. How We Use Your Information</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Consult, facilitate and deliver services mentioned on this website.</li>
          <li>Ensure smooth operations, process accuracy and compliance.</li>
          <li>Respond to client inquiries and provide support.</li>
          <li>Enhance the efficiency and security of our systems.</li>
          <li>Meet legal, regulatory and contractual obligations.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Data Protection and Confidentiality</h2>
        <p className="text-muted-foreground leading-relaxed">We implement stringent security measures, including data encryption, access control, and regular audits. All client data is handled with the utmost confidentiality.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Sharing Your Information</h2>
        <p className="text-muted-foreground leading-relaxed">We do not sell or rent your data to third parties. Information may only be shared with trusted service providers under strict confidentiality agreements, or to comply with legal requirements.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Retention of Data</h2>
        <p className="text-muted-foreground leading-relaxed">We retain client data only as long as necessary to fulfill our service commitments. Upon request, data can be securely deleted or returned.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Your Rights</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>Access and review the information shared with us.</li>
          <li>Request corrections, deletions, or updates to your data.</li>
          <li>Opt out of communications or data sharing where applicable.</li>
        </ul>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Contact Us</h2>
        <p className="text-muted-foreground leading-relaxed">HK Global Infotech<br />Office No. 206, Tower B, IThum Towers, Sector 62<br />Noida, Uttar Pradesh, 201012, India<br />Email: info@hkglobalinfotech.com</p>
      </div>
    </section>
  </Layout>
);

export default PrivacyPolicy;
