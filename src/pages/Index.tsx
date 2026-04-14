import { Link } from "react-router-dom";
import { ArrowRight, DollarSign, TrendingUp, Users, FileText, BookOpen, Receipt, Package, ClipboardList, Headphones, ShoppingCart, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import heroImg from "@/assets/hero-meeting.jpg";
import consultImg from "@/assets/consultation.jpg";

const stats = [
  { value: "18+", label: "Years of Experience" },
  { value: "65+", label: "Specialised Services" },
  { value: "15+", label: "Tools Operating Capability" },
];

const benefits = [
  { icon: DollarSign, title: "Cost-Efficiency", desc: "Save on operational costs by leveraging the expertise and resources of HK Global." },
  { icon: TrendingUp, title: "Growth-Centric", desc: "Optimise bottom line and concentrate on strategic growth and customer engagement." },
  { icon: Users, title: "Flexible to Scale", desc: "Easily adapt to seasonal or market changes with flexible staffing and operational support." },
];

const featuredServices = [
  { title: "Order-to-Cash", desc: "Our Order-to-Cash services streamline the entire financial process, from order processing to cash application and collections.", path: "/services/order-to-cash", icon: FileText },
  { title: "Back-Office Support", desc: "Our back-office support streamlines data entry and catalog management, supporting businesses in organizing information.", path: "/services/back-office-support", icon: Headphones },
  { title: "Talent Outsourcing", desc: "Our Talent Outsourcing service provides skilled professionals across multiple domains, ensuring high-quality and cost-effective workforce.", path: "/services/talent-outsourcing", icon: UserCheck },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Professional team meeting" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-primary/85" />
      </div>
      <div className="relative container-wide mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-4">Partner for Operation and Back Office Support</p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-primary-foreground max-w-4xl leading-[1.1] mb-6">
          Driving Business Growth with Back-Office Outsourcing
        </h1>
        <p className="text-lg text-primary-foreground/80 max-w-2xl mb-8">
          Welcome to HK Global Infotech, where we provide tailored outsourced services, leveraging the expertise of our skilled team and a global operating model to optimize operations for businesses.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contact" className="bg-secondary text-secondary-foreground px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-orange-light transition-colors inline-flex items-center gap-2">
            Contact Us <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services" className="border-2 border-primary-foreground/30 text-primary-foreground px-8 py-3.5 rounded-lg font-bold text-sm hover:bg-primary-foreground/10 transition-colors">
            View Our Services
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-background border-b border-border">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-4xl lg:text-5xl font-heading font-extrabold text-secondary">{s.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* About */}
    <section className="section-padding">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">About HK Global</p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-6">A Trusted Partner in Process Outsourcing Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            HK Global Infotech offers tailored solutions to transform operational challenges into growth opportunities. With 18 years of expertise in finance, order management, back-office operations, and procurement, we simplify processes, ensure compliance, and act as an extension of your team.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our vision is to be a trusted leader in business process solutions, transforming back-office operations into strategic advantages.
          </p>
          <Link to="/about" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-bold text-sm hover:bg-navy-dark transition-colors">
            Learn More <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img src={consultImg} alt="Business consultation" className="w-full h-auto" width={1280} height={720} loading="lazy" />
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Benefits of Outsourcing to Us</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Running back-office operations can be tricky. HK Global's Back-Office outsourcing services help you tackle these efficiently.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((b) => (
            <div key={b.title} className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <b.icon className="h-7 w-7 text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{b.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
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
          {featuredServices.map((s) => (
            <ServiceCard key={s.path} title={s.title} description={s.desc} path={s.path} icon={s.icon} />
          ))}
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

export default Index;
