export const NavLinkContainer = ({children,className
}:{children:React.ReactNode, className?:string}) => {
  return (
    <ul className={`flex flex-col bg-[#121212] gap-4 text-normal font-bold py-4 px-4 rounded-md ${className}`}>
      {children}
    </ul>
  );
};
