import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="bg-primary text-primary-foreground section-padding">
    <div className="container-wide mx-auto text-center">
      <h2 className="text-3xl lg:text-4xl mb-4">Ready to Collaborate?</h2>
      <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
        Regardless of your business model, we bring extensive experience and a wide range of services to seamlessly support your back-office operations, acting as an extension of your existing team.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-10">
        {[
          "Discuss your requirements with our Expert",
          "Build a plan with clear goals and expectations",
          "Transfer the necessary knowledge and process to HK Global",
          "Stay updated with regular reports, as we manage everything afterwards",
        ].map((step, i) => (
          <div key={i} className="text-left">
            <div className="w-10 h-10 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-sm mb-3">{i + 1}</div>
            <p className="text-sm text-primary-foreground/80">{step}</p>
          </div>
        ))}
      </div>
      <Link to="/contact" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-lg font-bold hover:bg-orange-light transition-colors">
        Request a Consultation <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  </section>
);

export default CTASection;
