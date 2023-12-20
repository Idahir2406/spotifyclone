import styles from "./styles.module.css";

export const NavButton = ({
  children,
  className,
  popOverContent,
  onClick,  // Agrega onClick a las props
  ...rest
}: {
  children: React.ReactNode;
  className?: string;
  popOverContent?: React.ReactNode;
  onClick?: () => void;  // Define onClick como una función opcional
}) => {
  return (
    <button
      className={`text-gray-400 p-2 hover:text-white   rounded-full ${popOverContent && "relative"} items-center flex justify-center ${styles.popContainer} ${className}`}
      onClick={onClick}  // Asigna onClick al botón
      {...rest}
    >
      {children}
      {popOverContent && (
        <span
          className={`absolute text-xs bg-zinc-800 font-medium bottom-9 py-1 px-2 rounded-md min-w-max ${styles.popOver}`}
        >
          {popOverContent}
        </span>
      )}
    </button>
  );
};
