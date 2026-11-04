export type ReelProps = {
  children: React.ReactNode;
};

export default function Reel({ children }: ReelProps) {
  return <div className="reel">{children}</div>;
}
