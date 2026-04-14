import { Link } from "react-router-dom";
import { ArrowRight, Shield, Briefcase, Heart, FileText, Headphones, UserCheck } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import partnerImg from "@/assets/partnership.jpg";

const values = [
  { icon: Shield, title: "Accountability", desc: "Embrace accountability by owning our actions and outcomes, promptly addressing errors, and improving through continuous learning." },
  { icon: Briefcase, title: "Professionalism", desc: "Maintaining high standards in work conduct and communication while ensuring the timely and consistent delivery of services." },
  { icon: Heart, title: "Trust and Integrity", desc: "Operating with honesty and transparency in all interactions while upholding confidentiality and protecting sensitive client information." },
];

const About = () => (
  <Layout>
    <PageHero title="About HK Global Infotech" subtitle="A trusted partner in Process Outsourcing Services" breadcrumb="Home / About" />

    <section className="section-padding">
      <div className="container-wide mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">Our Background</p>
          <h2 className="text-3xl lg:text-4xl text-foreground mb-6">A Trusted Partner in Process Outsourcing Services</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            At HK Global Infotech, we specialize in delivering smart, tailored solutions to turn operational challenges into real opportunities for growth. What sets us apart? We're led by a seasoned professional with over 18 years of experience partnering with top U.S. retail brands.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This deep industry knowledge drives our expertise in Finance and Accounting, Order Management, Back-Office Operations and Sourcing and Procurement. We act as a seamless extension of your team, simplifying processes and ensuring compliance, so you can focus on achieving your business goals.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-6 py-3 rounded-lg font-bold text-sm hover:bg-orange-light transition-colors">
            Request a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="rounded-xl overflow-hidden shadow-xl">
          <img src={partnerImg} alt="Business partnership" className="w-full h-auto" width={1280} height={720} loading="lazy" />
        </div>
      </div>
    </section>

    {/* Mission & Vision */}
    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-card border border-border rounded-xl p-8">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">Our Mission</p>
          <h3 className="text-2xl text-foreground mb-4">Simplifying Operations, Amplifying Success</h3>
          <p className="text-muted-foreground leading-relaxed">
            At HK Global Infotech, our mission is to provide businesses with tailored solutions that enhance operational efficiency, deliver measurable results and foster long-term growth. By focusing on transparency, collaboration and adaptability, we aim to create lasting partnerships that thrive on shared success and innovation.
          </p>
        </div>
        <div className="bg-card border border-border rounded-xl p-8">
          <p className="text-secondary font-bold text-sm uppercase tracking-widest mb-2">Our Vision</p>
          <h3 className="text-2xl text-foreground mb-4">Reshaping Back-Office Operations for Strategic Growth</h3>
          <p className="text-muted-foreground leading-relaxed">
            Our vision is to be a trusted leader in business process solutions, recognized for turning back-office operations into strategic advantages. We aspire to create a future where every client confidently navigates change, leveraging our expertise to operate efficiently, grow sustainably and achieve their ambitious goals.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">We Stand for Our Values</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <v.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Services */}
    <section className="section-padding bg-surface">
      <div className="container-wide mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground">Comprehensive Back-Office Services</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <ServiceCard title="Order-to-Cash" description="Our Order-to-Cash services streamline the entire financial process." path="/services/order-to-cash" icon={FileText} />
          <ServiceCard title="Back-Office Support" description="Our back-office support streamlines data entry and catalog management." path="/services/back-office-support" icon={Headphones} />
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

export default About;
