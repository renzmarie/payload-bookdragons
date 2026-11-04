type ColoredBlockProps = {
  children: React.ReactNode;
  as?: "section" | "article";
  backgroundColor:
    | "section-yellow"
    | "section-blue"
    | "section-green"
    | "section-pink"
    | "section-brown";
};

export default function ColoredBlock({
  children,
  as = "section",
  backgroundColor,
}: ColoredBlockProps) {
  const Element = as;

  return <Element className={`section ${backgroundColor}`}>{children}</Element>;
}
