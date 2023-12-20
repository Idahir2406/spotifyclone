export const PlayerButton = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={`text-zinc-400 hover:text-white ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
