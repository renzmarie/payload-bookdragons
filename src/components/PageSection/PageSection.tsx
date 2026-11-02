type PageSectionProps = {
  children: React.ReactNode;
};

export default function PageSection({ children }: PageSectionProps) {
  return <section className="m-b-xl stack stack-large">{children}</section>;
}
