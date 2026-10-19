import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "outline-white"
  | "ghost";

type ButtonSize = "xs" | "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  icon?: ReactNode;
}

// 8 - 32
// 8.5 - 34
// 10 - 40
// 11 - 44
// 11.5 - 46
// 12 - 48

const sizes: Record<ButtonSize, string> = {
  xs: "h-8 px-3 md:px-4 text-sm",
  sm: "h-8.5 md:h-11.5 px-3 md:px-4 text-sm md:text-sm",
  md: "h-10 md:h-11.5 px-4 md:px-6 text-[15px] md:text-[16px]",
  lg: "h-10 md:h-12 px-5 md:px-6 text-[15px] md:text-[16px]",
};

const variants: Record<ButtonVariant, string> = {
  primary: "bg-[#4747D6] text-white",
  secondary: "bg-[#EDEDFB] text-[#4747D6]",
  outline: "border border-[#4747D6] bg-transparent text-[#4747D6]",
  "outline-white": "border border-white bg-transparent text-white",
  ghost: "bg-transparent text-[#4747D6]",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  icon,
  href,
  ...props
}: ButtonProps) {
  const styles = [
    "inline-flex cursor-pointer items-center justify-center gap-2",
    "font-medium transition-colors duration-200",
    "focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4747D6]/30",

    sizes[size],
    variants[variant],

    // Default hover
    "hover:bg-[#FDE93D] hover:text-[#0D0D26]",

    // Custom classes
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={styles} {...props}>
      {children}
      {icon}
    </button>
  );
}
