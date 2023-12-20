import Link from "next/link";
export const Navlink = ({
  children,
  className,
  sideContent,
  href,
}: {
  children: React.ReactNode;
  className?: string;
  sideContent?: React.ReactNode;
  href: string ;
}) => {
  return (
    <li
      className={className}
    >
      <Link className="flex items-center gap-4 text-gray-400 hover:text-white hover:underline transition-colors" href={href}>
        {children}
      </Link>
      {sideContent}
    </li>
  );
};
