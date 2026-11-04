type GridProps = {
  children: React.ReactNode;
  gap?: "large-gap" | "small-gap" | "no-gap";
  columns?:
    | "auto-columns"
    | "two-columns"
    | "three-columns"
    | "four-columns"
    | "two-plus-one-columns"
    | "one-plus-two-columns";
  isRecommendationSection?: boolean;
  placeProduct?: "product-on-left" | "product-on-right";
};

export default function Grid({
  children,
  gap,
  columns,
  isRecommendationSection,
  placeProduct,
}: GridProps) {
  return (
    <div
      className={`container grid ${gap} ${columns} ${isRecommendationSection ? `recommendation-section ` + `${placeProduct}` : ""}`}
    >
      {children}
    </div>
  );
}
