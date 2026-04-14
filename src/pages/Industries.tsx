import { Link } from "react-router-dom";
import { ArrowRight, FileText, Headphones, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import warehouseImg from "@/assets/warehouse.jpg";

const retailSolutions = [
  { title: "Accounting and Bookkeeping", desc: "Accurate financial tracking, improved cash flow, and compliance for retailers, manufacturers, and distributors." },
  { title: "Catalog Management", desc: "SKU creation, product descriptions, and updates for accurate and appealing online and offline catalogs." },
  { title: "Customer Support Handling", desc: "Scalable solutions for customer queries, complaints, and support tasks during peak seasons." },
  { title: "Sourcing and Procurement", desc: "Streamline vendor selection, contract negotiation, and procurement for cost-effective solutions." },
  { title: "Data Security & Compliance", desc: "Data reporting, compliance management, and secure data handling for retail businesses." },
  { title: "Payroll Management & HR", desc: "Streamline employee management, ensure compliance with labor laws, and eliminate errors." },
  { title: "eCommerce Development", desc: "User-friendly, feature-rich eCommerce websites tailored to your business needs." },
];

const Industries = () => (
  <Layout>
    <PageHero title="Industries We Serve" subtitle="Succeed in the Retail World With HK Global as Your Partner" breadcrumb="Home / Industries" />

    <section className="section-padding">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-6">Tailored Solutions for Every Need of Your Retail Business</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Retail success starts with efficient back-office operations. At HK Global Infotech, we understand the unique challenges retailers face. Our customized back-office services are designed to streamline your operations, reduce costs, and optimize efficiency.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We handle the complexities of inventory management, order processing, and financial reporting, giving you the freedom to focus on growing your business and building customer loyalty.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img src={warehouseImg} alt="Warehouse operations" className="w-full h-auto" width={1280} height={720} loading="lazy" />
        </div>
      </div>
    </section>

    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {retailSolutions.map((s) => (
            <div key={s.title} className="bg-card border border-border rounded-xl p-6">
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive Back-Office Services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <ServiceCard title="Order-to-Cash" description="Streamline the entire financial process." path="/services/order-to-cash" icon={FileText} />
          <ServiceCard title="Back-Office Support" description="Streamline data entry and catalog management." path="/services/back-office-support" icon={Headphones} />
          <ServiceCard title="Talent Outsourcing" description="Skilled professionals across multiple domains." path="/services/talent-outsourcing" icon={UserCheck} />
        </div>
        <div className="text-center">
          <Link to="/services" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-bold text-sm hover:bg-navy-dark transition-colors">
            View All Services <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Industries;
