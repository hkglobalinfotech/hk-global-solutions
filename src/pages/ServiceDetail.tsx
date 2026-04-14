import { useParams, Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ChevronDown, FileText, BookOpen, Receipt, Package, ClipboardList, Headphones, ShoppingCart, UserCheck } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";

interface ServiceData {
  title: string;
  headline: string;
  description: string;
  includes: { title: string; desc: string }[];
  advantages: { title: string; desc: string }[];
  faqs: { q: string; a: string }[];
}

const servicesData: Record<string, ServiceData> = {
  "order-to-cash": {
    title: "Order-to-Cash",
    headline: "Driving Efficiency Across Every Stage of Your Revenue Cycle",
    description: "Our Order-to-Cash (O2C) service is designed to streamline the entire transaction process, from order processing to payment collection, ensuring faster payments and improved cash flow. We automate invoicing, reduce errors, speed up the billing cycle, and optimize collections to minimize overdue payments.",
    includes: [
      { title: "Order Management", desc: "We ensure accurate order capture, verification, and processing." },
      { title: "Invoicing and Billing", desc: "Generate timely, accurate invoices and manage billing cycles." },
      { title: "Collections Management", desc: "Proactive collections with reminders, follow-ups and overdue invoice resolutions." },
      { title: "Accounts Receivable (AR) Management", desc: "Track and manage receivables to ensure timely payments." },
      { title: "Cash Application", desc: "Efficient matching of incoming payments to outstanding invoices." },
      { title: "Dispute Resolution", desc: "Quick resolution of billing disputes and discrepancies." },
    ],
    advantages: [
      { title: "Domain Expertise", desc: "With a team of skilled professionals across various domains." },
      { title: "Advanced Technology", desc: "We leverage cutting-edge tools and platforms." },
      { title: "Data Security", desc: "We prioritize data security and implement robust measures." },
      { title: "Scalable Solutions", desc: "Our services are flexible and adapt to your business needs." },
    ],
    faqs: [
      { q: "How does HK Global's Order Receipt and Verification process ensure accuracy?", a: "We meticulously capture, verify, and process all incoming orders, checking for product availability, correct quantities, and accurate pricing." },
      { q: "How does HK Global manage inventory to ensure efficient order fulfillment?", a: "We utilize advanced real-time inventory tracking systems to monitor stock levels and align them with demand." },
    ],
  },
  "bookkeeping": {
    title: "Bookkeeping",
    headline: "Accurate Bookkeeping Services for Absolute Financial Clarity",
    description: "Our Bookkeeping services provide meticulous financial record-keeping that ensures your books are always accurate, up-to-date, and compliant. We handle everything from daily transactions to complex reconciliations.",
    includes: [
      { title: "Transaction Recording", desc: "Meticulously document every financial movement—sales, purchases, expenses and income." },
      { title: "Bank Reconciliation", desc: "Match financial records with bank statements to detect discrepancies." },
      { title: "Expense Management", desc: "Track and categorize expenses, helping you monitor spending patterns." },
      { title: "Accounts Payable and Receivable Management", desc: "Timely payments to suppliers and efficient collection from clients." },
      { title: "Payroll Processing", desc: "Accurate and on time payroll with proper tax deductions." },
      { title: "Financial Reporting", desc: "Clear, actionable financial reports including income statements and balance sheets." },
    ],
    advantages: [
      { title: "Domain Expertise", desc: "Skilled professionals in accounting and bookkeeping." },
      { title: "Advanced Technology", desc: "Integration with QuickBooks, Sage and more." },
      { title: "Data Security", desc: "Strict security protocols for financial data." },
      { title: "Scalable Solutions", desc: "Flexible to grow with your business." },
    ],
    faqs: [
      { q: "What are the benefits of outsourcing bookkeeping to HK Global Infotech?", a: "Cost-effectiveness, improved accuracy, increased efficiency and access to expert knowledge." },
      { q: "How often will I receive financial reports?", a: "Flexible and customizable — monthly, quarterly, or annual, per your preferred schedule." },
      { q: "Can HK Global Infotech integrate with my existing accounting software?", a: "Yes, we integrate with QuickBooks, Sage, and most popular accounting packages." },
    ],
  },
  "ar-ap-services": {
    title: "AR/AP Services",
    headline: "Seamless Management of Your Accounts Receivables and Payables",
    description: "Efficient cash flow management is critical to the sustainability and growth of any business. Our AP and AR Management Services are specifically designed to streamline your financial processes, ensure timely payments, and optimize collections.",
    includes: [
      { title: "Accounts Payable Management", desc: "Timely, accurate, and compliant vendor payments from invoice processing to reconciliation." },
      { title: "Accounts Receivable Management", desc: "Accelerating receivables cycle by streamlining invoicing, tracking payments, and following up." },
    ],
    advantages: [
      { title: "Domain Expertise", desc: "Skilled professionals in AR/AP management." },
      { title: "Advanced Technology", desc: "Automated tools to reduce errors." },
      { title: "Data Security", desc: "Robust data handling procedures." },
      { title: "Scalable Solutions", desc: "Designed to grow with your business." },
    ],
    faqs: [
      { q: "How can outsourcing AR improve cash flow?", a: "Timely invoicing, proactive collections, and effective management of overdue accounts." },
      { q: "What benefits does outsourcing AP offer?", a: "Improved payment accuracy, streamlined invoice processing, and timely vendor payments." },
    ],
  },
  "inventory-valuation": {
    title: "Inventory Valuation",
    headline: "Precise Inventory Valuation to Optimize Costs and Maximize Returns",
    description: "We offer comprehensive Inventory Valuation services designed to help businesses maintain accurate stock levels, optimize inventory management, and enhance financial reporting.",
    includes: [
      { title: "Inventory Planning and Forecasting", desc: "Precise demand forecasting and trend-based planning." },
      { title: "Stock Monitoring and Control", desc: "Real-time inventory tracking with regular audits." },
      { title: "Warehouse Management", desc: "Streamline storage and retrieval with barcode and RFID integration." },
      { title: "Order Fulfillment and Returns", desc: "Timely order fulfillment and efficient reverse logistics." },
      { title: "Reporting and Analytics", desc: "Detailed reports and actionable insights on stock performance." },
    ],
    advantages: [
      { title: "Domain Expertise", desc: "Expert team using industry best practices." },
      { title: "Advanced Technology", desc: "Advanced tools for precise tracking." },
      { title: "Data Security", desc: "Secure data handling and compliance." },
      { title: "Scalable Solutions", desc: "Adapt to your inventory needs." },
    ],
    faqs: [
      { q: "Why is inventory valuation important?", a: "It affects financial statements and profitability by accurately reflecting stock value." },
      { q: "Can HK Global integrate with our existing systems?", a: "Yes, we seamlessly integrate with existing inventory or ERP systems." },
    ],
  },
  "order-management": {
    title: "Order Management",
    headline: "Optimize Order Processing for Faster, Error-Free Deliveries",
    description: "We specialize in providing comprehensive Order Management Services that optimize every step of your order processing cycle, from receiving and verifying customer orders to ensuring timely fulfillment.",
    includes: [
      { title: "Order Receipt and Verification", desc: "Accurately capture, verify, and process all incoming orders." },
      { title: "Inventory Management and Fulfillment", desc: "Real-time inventory tracking with efficient picking, packing, and shipment." },
      { title: "Customer Communication and Support", desc: "Handle all inquiries related to order status and shipment tracking." },
      { title: "Returns and Exchanges Management", desc: "Efficient returns and exchanges with minimal business disruption." },
    ],
    advantages: [
      { title: "Domain Expertise", desc: "Expert order management professionals." },
      { title: "Advanced Technology", desc: "Cutting-edge order processing tools." },
      { title: "Data Security", desc: "Secure order data handling." },
      { title: "Scalable Solutions", desc: "Scale with your order volume." },
    ],
    faqs: [
      { q: "How does HK Global ensure order accuracy?", a: "We meticulously capture, verify, and process all incoming orders, checking availability and pricing." },
      { q: "How does HK Global handle returns efficiently?", a: "We manage product returns with minimal disruption, optimizing recovery and reducing losses." },
    ],
  },
  "back-office-support": {
    title: "Back-Office Support",
    headline: "Streamlined Back-Office Solutions for Unmatched Operational Excellence",
    description: "Managing back-office functions like data entry, processing, and record management can be a significant drain on resources. By outsourcing these critical functions to HK Global Infotech, you can free up valuable resources, reduce costs, and improve data accuracy.",
    includes: [
      { title: "Data Entry", desc: "Accurate and timely entry of data from invoices, receipts, purchase orders, and customer information." },
      { title: "Data Conversion", desc: "Converting data from various formats into digital formats like spreadsheets and databases." },
      { title: "Data Processing", desc: "Cleaning, validating, and organizing data for accuracy and consistency." },
      { title: "Record Management", desc: "Securely storing and managing important documents and contracts." },
      { title: "Online Catalog Services", desc: "Creating, maintaining, and updating online product catalogs." },
    ],
    advantages: [
      { title: "Domain Expertise", desc: "Specialized back-office professionals." },
      { title: "Advanced Technology", desc: "ERP and CRM integration." },
      { title: "Data Security", desc: "Strict confidentiality and secure methods." },
      { title: "Scalable Solutions", desc: "Adapt to your data volume." },
    ],
    faqs: [
      { q: "What are the benefits of outsourcing back-office support?", a: "Significantly reduce costs, improve efficiency, and enhance data accuracy." },
      { q: "What types of data can HK Global Infotech handle?", a: "We handle customer data, financial data, inventory data, and more." },
    ],
  },
  "sourcing-procurement": {
    title: "Sourcing & Procurement",
    headline: "Strategic Sourcing and Procurement to Unlock Business Potential",
    description: "In today's fast-paced global market, success hinges on smart sourcing and procurement. At HK Global, we excel in sourcing premium products for the retail industry. Our seasoned sourcing specialists have partnered with leading brands across the US and Europe.",
    includes: [
      { title: "Supplier Identification & Evaluation", desc: "Meticulously identify and evaluate potential suppliers based on quality and reliability." },
      { title: "Market Research & Analysis", desc: "In-depth market research to identify competitive suppliers and analyze trends." },
      { title: "Product Development & Sampling", desc: "Collaborate with suppliers to develop new products and evaluate samples." },
      { title: "Negotiation & Contract Management", desc: "Negotiate favorable contracts with competitive pricing and optimal terms." },
      { title: "Order Management & Fulfillment", desc: "Efficiently place purchase orders, track shipments, and resolve issues." },
      { title: "Quality Assurance & Control", desc: "Rigorous quality control including lab testing and on-site inspections." },
      { title: "Logistics & Dispatch", desc: "Manage the entire logistics process for timely, cost-effective delivery." },
    ],
    advantages: [
      { title: "Quality Focus", desc: "Strong supplier network for high-quality products." },
      { title: "Cost Optimization", desc: "Competitive pricing through market expertise and negotiation." },
      { title: "Expertise & Experience", desc: "In-depth knowledge of global markets and best practices." },
      { title: "Sustainability & Ethics", desc: "Prioritize ethical and sustainable sourcing practices." },
    ],
    faqs: [
      { q: "How can HK Global Infotech help me reduce procurement costs?", a: "By identifying competitive suppliers, optimizing supply chains, and implementing cost-saving strategies." },
      { q: "How does HK Global Infotech ensure product quality?", a: "Rigorous supplier vetting, on-site inspections, and pre-shipment checks." },
    ],
  },
  "talent-outsourcing": {
    title: "Talent Outsourcing",
    headline: "On-Demand Talent Solutions to Propel Your Business Forward",
    description: "Talent outsourcing provides access to a pool of skilled professionals on a flexible basis, allowing businesses to scale their workforce up or down as needed without the overhead of full-time employment.",
    includes: [
      { title: "Payroll Specialist", desc: "Processing payroll, managing taxes, and ensuring regulatory compliance." },
      { title: "Accounting Specialist", desc: "Handling AP, AR, financial reporting, and other accounting functions." },
      { title: "Routing Specialist", desc: "Optimizing logistics and transportation routes." },
      { title: "Sourcing Specialist", desc: "Identifying suppliers, negotiating contracts, and managing procurement." },
      { title: "Administrative & Virtual Assistant", desc: "Scheduling, email management, and operational support." },
      { title: "Cybersecurity and IT Specialist", desc: "Identifying and mitigating vulnerabilities in IT systems." },
      { title: "CAD Designer", desc: "Professional CAD design services for product, architectural, and engineering design." },
      { title: "Customer Care Representatives", desc: "Excellent customer service through phone, email, and chat." },
      { title: "UX/UI Designer", desc: "User-friendly interfaces for websites and mobile applications." },
      { title: "Web Developer", desc: "Developing and maintaining websites and web applications." },
    ],
    advantages: [
      { title: "Skilled Professionals", desc: "Experienced talent tailored to your needs." },
      { title: "Cost Efficiency", desc: "Reduce recruitment, training, and operational costs." },
      { title: "Scalability", desc: "Scale workforce up or down based on demand." },
      { title: "Streamlined Processes", desc: "End-to-end hiring with pre-vetted professionals." },
      { title: "Compliance", desc: "Regulatory compliance, labor laws, and risk mitigation." },
      { title: "Dedicated Support", desc: "Ongoing support with performance tracking." },
    ],
    faqs: [
      { q: "What is talent outsourcing?", a: "Hiring professionals through a third-party provider to handle specific tasks or projects." },
      { q: "Can I scale my outsourced team?", a: "Absolutely! Our services are highly flexible, allowing you to scale based on your business needs." },
      { q: "How does outsourcing save money?", a: "Eliminates in-house recruitment, onboarding, and infrastructure costs." },
    ],
  },
};

const FAQ = ({ q, a }: { q: string; a: string }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-border rounded-lg">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between p-5 text-left">
        <span className="font-semibold text-foreground text-sm pr-4">{q}</span>
        <ChevronDown className={`h-5 w-5 text-muted-foreground shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <div className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{a}</div>}
    </div>
  );
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = servicesData[slug || ""];

  if (!data) {
    return (
      <Layout>
        <div className="section-padding text-center">
          <h1 className="text-3xl text-foreground">Service not found</h1>
          <Link to="/services" className="text-secondary mt-4 inline-block">Back to Services</Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHero title={data.title} subtitle={data.headline} breadcrumb={`Home / Services / ${data.title}`} />

      {/* Description */}
      <section className="section-padding">
        <div className="container-wide mx-auto max-w-4xl">
          <p className="text-muted-foreground leading-relaxed text-lg">{data.description}</p>
        </div>
      </section>

      {/* What's included */}
      <section className="section-padding bg-surface">
        <div className="container-wide mx-auto">
          <h2 className="text-3xl text-foreground mb-8">Our Comprehensive {data.title} Services Include</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {data.includes.map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-secondary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <h2 className="text-3xl text-foreground mb-8">Advantages of Working with HK Global</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.advantages.map((adv) => (
              <div key={adv.title} className="bg-primary text-primary-foreground rounded-xl p-6">
                <h3 className="font-bold text-lg mb-2">{adv.title}</h3>
                <p className="text-sm text-primary-foreground/80">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      {data.faqs.length > 0 && (
        <section className="section-padding bg-surface">
          <div className="container-wide mx-auto max-w-3xl">
            <h2 className="text-3xl text-foreground mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {data.faqs.map((faq) => (
                <FAQ key={faq.q} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </Layout>
  );
};

export default ServiceDetail;
