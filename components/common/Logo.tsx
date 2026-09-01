import Image from "next/image";
import Logo from "@/assets/svgs/latest-logo.svg";
import FooterLogo from "@/assets/svgs/footer-logo.svg";
import Link from "next/link";

export function WecollectLogo() {
  return (
    <Link href="/" aria-label="WeCollect" className="shrink-0">
      <Image
        src={Logo}
        alt="WeCollect"
        width={100}
        height={20}
        priority
        className="h-auto w-"
      />
    </Link>
  );
}

export function WecollectFooterLogo() {
  return (
    <Link href="/" aria-label="WeCollect" className="shrink-0">
      <Image
        src={FooterLogo}
        alt="WeCollect"
        width={100}
        height={20}
        priority
        className="h-auto w-"
      />
    </Link>
  );
}
