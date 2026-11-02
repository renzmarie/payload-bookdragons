type PageContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: PageContainerProps) {
  return <div>{children}</div>;
}
