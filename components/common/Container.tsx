import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className = "" }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-260 px-5 md:px-8 xl:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
