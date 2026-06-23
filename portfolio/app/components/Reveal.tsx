type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Reveal({ children, className = "" }: Props) {
  return <div className={`reveal ${className}`}>{children}</div>;
}