import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: { label: string; href: string }[];
  align?: "start" | "end";
}

export function FooterColumn({
  title,
  links,
  align = "start",
}: FooterColumnProps) {
  return (
    <div className={align === "end" ? "text-end" : "text-start"}>
      <h3 className="text-[14px] font-medium leading-5.5 uppercase text-[#B9B9CC]">
        {title}
      </h3>

      <nav className="mt-3 flex flex-col gap-2.5">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-[12px] font-medium leading-5 text-[#B9B9CC] transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
