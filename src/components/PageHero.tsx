interface PageHeroProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}

const PageHero = ({ title, subtitle, breadcrumb }: PageHeroProps) => (
  <section className="bg-primary text-primary-foreground section-padding">
    <div className="container-wide mx-auto">
      {breadcrumb && <p className="text-sm text-primary-foreground/60 mb-2">{breadcrumb}</p>}
      <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-4">{title}</h1>
      {subtitle && <p className="text-lg text-primary-foreground/80 max-w-3xl leading-relaxed">{subtitle}</p>}
    </div>
  </section>
);

export default PageHero;
