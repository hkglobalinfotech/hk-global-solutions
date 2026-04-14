import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Order-to-Cash", path: "/services/order-to-cash" },
  { name: "Bookkeeping", path: "/services/bookkeeping" },
  { name: "AR/AP Services", path: "/services/ar-ap-services" },
  { name: "Inventory Valuation", path: "/services/inventory-valuation" },
  { name: "Order Management", path: "/services/order-management" },
  { name: "Back-Office Support", path: "/services/back-office-support" },
  { name: "Sourcing & Procurement", path: "/services/sourcing-procurement" },
  { name: "Talent Outsourcing", path: "/services/talent-outsourcing" },
];

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-wide mx-auto section-padding">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div>
          <img src={logo} alt="HK Global Infotech" className="h-16 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            HK Global Infotech, led by industry experts, has been delivering business outsourcing and back-office operations services for over a decade.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-base font-bold mb-4">Services We Offer</h4>
          <ul className="space-y-2">
            {services.map((s) => (
              <li key={s.path}>
                <Link to={s.path} className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">{s.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-base font-bold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link to="/" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Home</Link></li>
            <li><Link to="/about" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">About Us</Link></li>
            <li><Link to="/services" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Services</Link></li>
            <li><Link to="/industries" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Industries</Link></li>
            <li><Link to="/contact" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Contact Us</Link></li>
            <li><Link to="/privacy-policy" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use" className="text-sm text-primary-foreground/70 hover:text-secondary transition-colors">Terms of Use</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-base font-bold mb-4">Contact Us</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <Phone className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
              <div className="text-sm text-primary-foreground/70">
                <p>+91 120 4258158</p>
                <p>+91-8595510366</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
              <span className="text-sm text-primary-foreground/70">info@hkglobalinfotech.com</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="h-4 w-4 mt-0.5 text-secondary shrink-0" />
              <span className="text-sm text-primary-foreground/70">Office No. 206, Tower B, IThum Towers, Sector 62, Noida (201012), Uttar Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-primary-foreground/10">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-primary-foreground/50">Copyright © 2024 HK Global Infotech. All Rights Reserved.</p>
        <div className="flex gap-6">
          <Link to="/contact" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors">Contact Us</Link>
          <Link to="/privacy-policy" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors">Privacy Policy</Link>
          <Link to="/terms-of-use" className="text-sm text-primary-foreground/50 hover:text-secondary transition-colors">Terms of Use</Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
