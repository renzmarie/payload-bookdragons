type GridProps = {
  children: React.ReactNode;
};

export default function Grid({ children }: GridProps) {
  return <div className="reel">{children}</div>;
}
