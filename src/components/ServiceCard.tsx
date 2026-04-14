import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  path: string;
  icon: LucideIcon;
}

const ServiceCard = ({ title, description, path, icon: Icon }: ServiceCardProps) => (
  <Link to={path} className="group bg-card border border-border rounded-xl p-6 hover:border-secondary hover:shadow-lg transition-all duration-300">
    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
      <Icon className="h-6 w-6 text-primary" />
    </div>
    <h3 className="text-lg font-bold text-foreground mb-2">{title}</h3>
    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{description}</p>
    <span className="inline-flex items-center gap-1 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
      Learn More <ArrowRight className="h-4 w-4" />
    </span>
  </Link>
);

export default ServiceCard;
