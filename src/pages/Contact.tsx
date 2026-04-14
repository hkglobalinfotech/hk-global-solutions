import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import officeImg from "@/assets/office-team.jpg";

const serviceOptions = [
  "Order-to-Cash", "Bookkeeping", "AR/AP Services", "Inventory Valuation",
  "Order Management", "Back-Office Support", "Sourcing and Procurement", "Talent Outsourcing",
];

const Contact = () => {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Consultation Request - ${formData.service || "General"}`);
    const body = encodeURIComponent(`Name: ${formData.firstName} ${formData.lastName}\nEmail: ${formData.email}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`);
    window.location.href = `mailto:info@hkglobalinfotech.com?subject=${subject}&body=${body}`;
  };

  return (
    <Layout>
      <PageHero title="Contact Us" subtitle="Get in touch with us for any inquiries, support, or to discuss how we can assist your business." breadcrumb="Home / Contact" />

      {/* Contact Info */}
      <section className="section-padding">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Make a Call</h3>
              <p className="text-sm text-muted-foreground">+91 120 4258158</p>
              <p className="text-sm text-muted-foreground">+91-8595510366</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Send an Email</h3>
              <p className="text-sm text-muted-foreground">info@hkglobalinfotech.com</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-bold text-foreground mb-2">Office Location</h3>
              <p className="text-sm text-muted-foreground">Office No. 206, Tower B, IThum Towers, Sector 62, Noida (201012), UP, India</p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="text-3xl text-foreground mb-6">Request a Consultation</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" required value={formData.firstName} onChange={(e) => setFormData({ ...formData, firstName: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                  <input type="text" placeholder="Last Name" required value={formData.lastName} onChange={(e) => setFormData({ ...formData, lastName: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                </div>
                <input type="email" placeholder="Business Email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                <input type="tel" placeholder="Phone" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary" />
                <select value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary">
                  <option value="">Select a Service</option>
                  {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                </select>
                <textarea placeholder="Message (Optional)" rows={4} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} className="w-full px-4 py-3 border border-border rounded-lg bg-background text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-secondary resize-none" />
                <button type="submit" className="w-full bg-secondary text-secondary-foreground py-3.5 rounded-lg font-bold text-sm hover:bg-orange-light transition-colors">
                  Submit
                </button>
              </form>
            </div>

            {/* Image + Map */}
            <div className="space-y-6">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img src={officeImg} alt="Our team at work" className="w-full h-64 object-cover" width={1280} height={720} loading="lazy" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3556.952060999191!2d77.36368821112104!3d28.62287637556852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b43a869a17%3A0xe44678df8395e77c!2sIThum%20Tower!5e1!3m2!1sen!2sin!4v1734851413367!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Office Location"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
