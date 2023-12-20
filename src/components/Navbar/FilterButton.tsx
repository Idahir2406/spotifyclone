
interface FilterButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const FilterButton: React.FC<FilterButtonProps> = ({ children,className, ...rest }) => {
  return (
    <button className={`min-w-fit bg-zinc-800 hover:bg-zinc-700 transition-colors py-1 px-3 rounded-3xl text-sm font-normal ${className}`} {...rest}>
      {children}
    </button>
  );
};
