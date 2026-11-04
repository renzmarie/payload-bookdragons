type PageSectionProps = {
  sectionHeading?: string;
  children: React.ReactNode;
};

export default function PageSection({
  sectionHeading,
  children,
}: PageSectionProps) {
  return (
    <section className="m-b-xl stack stack-large">
      <h2 className="section-heading">{sectionHeading}</h2>
      {children}
    </section>
  );
}
