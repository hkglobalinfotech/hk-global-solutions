import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";

const TermsOfUse = () => (
  <Layout>
    <PageHero title="Terms of Use" breadcrumb="Home / Terms of Use" />
    <section className="section-padding">
      <div className="container-wide mx-auto max-w-4xl prose prose-sm">
        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Legal Disclaimer</h2>
        <p className="text-muted-foreground leading-relaxed mb-6">The information, tools, and resources provided on this website are intended for general informational purposes only. Accessing this Site does not imply that HK Global Infotech is offering any services or materials in violation of legal requirements.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limited License</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">HK Global Infotech grants a non-exclusive, non-transferable, limited right to access this Site and the materials available herein. By accessing this Site, you agree that:</p>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>Accessing this Site is not unlawful under applicable laws.</li>
          <li>Access does not constitute an offer to sell or solicitation of any offer.</li>
          <li>The information should not be construed as an advertisement or public offering.</li>
          <li>You will not reproduce or share information without prior consent.</li>
        </ol>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Copyright and Usage</h2>
        <p className="text-muted-foreground leading-relaxed">Materials on this Site are provided for personal, non-commercial use only. HK Global Infotech retains all ownership rights to the content and materials available here.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Limitation of Liability</h2>
        <p className="text-muted-foreground leading-relaxed">While HK Global Infotech strives to provide accurate information, the content may include errors or outdated details. You access and use this Site at your own risk.</p>

        <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Governing Law</h2>
        <p className="text-muted-foreground leading-relaxed">These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts in Noida, India.</p>
      </div>
    </section>
  </Layout>
);

export default TermsOfUse;
