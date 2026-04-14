import { FileText, BookOpen, Receipt, Package, ClipboardList, Headphones, ShoppingCart, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import bpoImg from "@/assets/bpo-center.jpg";

const allServices = [
  { title: "Order-to-Cash", desc: "Our Order-to-Cash services streamline the entire financial process, from order processing to cash application and collections.", path: "/services/order-to-cash", icon: FileText },
  { title: "Bookkeeping", desc: "Our Bookkeeping services ensure precise record-keeping, covering detailed transactions, reconciliations and up-to-date reporting.", path: "/services/bookkeeping", icon: BookOpen },
  { title: "AR/AP Services", desc: "Our AR/AP services enhance cash flow by efficiently managing customer invoicing and supplier/vendor payments.", path: "/services/ar-ap-services", icon: Receipt },
  { title: "Inventory Valuation", desc: "We ensure accurate assessment of stock value using methods like FIFO, LIFO, or weighted average.", path: "/services/inventory-valuation", icon: Package },
  { title: "Order Management", desc: "Our Order Management services optimize order processing, from receipt to fulfillment, invoicing and delivery.", path: "/services/order-management", icon: ClipboardList },
  { title: "Back-Office Support", desc: "Our back-office support streamlines data entry and catalog management, supporting businesses in organizing information.", path: "/services/back-office-support", icon: Headphones },
  { title: "Sourcing & Procurement", desc: "Our Sourcing and Procurement services optimize vendor selection, purchasing and supplier management to drive cost efficiency.", path: "/services/sourcing-procurement", icon: ShoppingCart },
  { title: "Talent Outsourcing", desc: "Our Talent Outsourcing service provides skilled professionals across multiple domains, ensuring high-quality and cost-effective workforce.", path: "/services/talent-outsourcing", icon: UserCheck },
];

const Services = () => (
  <Layout>
    <PageHero title="Our Services" subtitle="Comprehensive Back-Office Services tailored to your business needs" breadcrumb="Home / Services" />

    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="mb-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Comprehensive Back-Office Services</h2>
            <p className="text-muted-foreground leading-relaxed">
              At HK Global Infotech, we offer a complete suite of back-office outsourcing services designed to streamline your operations, reduce costs, and drive growth. Our team of experts leverages industry best practices and advanced technology to deliver exceptional results.
            </p>
          </div>
          <div className="rounded-xl overflow-hidden shadow-xl">
            <img src={bpoImg} alt="BPO center team" className="w-full h-auto" width={1280} height={720} loading="lazy" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allServices.map((s) => (
            <ServiceCard key={s.path} title={s.title} description={s.desc} path={s.path} icon={s.icon} />
          ))}
        </div>
      </div>
    </section>

    <CTASection />
  </Layout>
);

export default Services;
