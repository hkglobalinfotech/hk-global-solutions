import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import logo from "@/assets/logo.png";

const services = [
  { name: "Order-to-Cash", path: "/services/order-to-cash" },
  { name: "Bookkeeping", path: "/services/bookkeeping" },
  { name: "AR/AP Services", path: "/services/ar-ap-services" },
  { name: "Inventory Valuation", path: "/services/inventory-valuation" },
  { name: "Order Management", path: "/services/order-management" },
  { name: "Back-Office Support", path: "/services/back-office-support" },
  { name: "Sourcing and Procurement", path: "/services/sourcing-procurement" },
  { name: "Talent Outsourcing", path: "/services/talent-outsourcing" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
      <div className="container-wide mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="HK Global Infotech" className="h-[3.85rem] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`text-sm font-semibold transition-colors hover:text-secondary ${isActive("/") ? "text-secondary" : "text-foreground"}`}>Home</Link>
          <Link to="/about" className={`text-sm font-semibold transition-colors hover:text-secondary ${isActive("/about") ? "text-secondary" : "text-foreground"}`}>About</Link>
          
          <div className="relative group">
            <button className={`text-sm font-semibold transition-colors hover:text-secondary flex items-center gap-1 ${location.pathname.startsWith("/services") ? "text-secondary" : "text-foreground"}`}>
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="bg-background border border-border rounded-lg shadow-xl p-2 w-64">
                <Link to="/services" className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-md transition-colors">All Services</Link>
                <div className="border-t border-border my-1" />
                {services.map((s) => (
                  <Link key={s.path} to={s.path} className="block px-4 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground rounded-md transition-colors">
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/industries" className={`text-sm font-semibold transition-colors hover:text-secondary ${isActive("/industries") ? "text-secondary" : "text-foreground"}`}>Industries</Link>
          <Link to="/contact" className="bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold hover:bg-orange-light transition-colors">Contact Us</Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2 text-foreground">
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-b border-border px-4 pb-6">
          <Link to="/" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-semibold text-foreground">Home</Link>
          <Link to="/about" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-semibold text-foreground">About</Link>
          
          <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-3 text-sm font-semibold text-foreground">
            Services <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
          </button>
          {servicesOpen && (
            <div className="pl-4 space-y-1">
              <Link to="/services" onClick={() => setMobileOpen(false)} className="block py-2 text-sm font-medium text-foreground">All Services</Link>
              {services.map((s) => (
                <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block py-2 text-sm text-muted-foreground">{s.name}</Link>
              ))}
            </div>
          )}

          <Link to="/industries" onClick={() => setMobileOpen(false)} className="block py-3 text-sm font-semibold text-foreground">Industries</Link>
          <Link to="/contact" onClick={() => setMobileOpen(false)} className="block mt-3 bg-secondary text-secondary-foreground px-6 py-2.5 rounded-lg text-sm font-bold text-center">Contact Us</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
