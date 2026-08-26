import Link from "next/link";
import { Button } from "../Button";
import { ArrowUpRightIcon } from "@/assets/svgs";

export function NavbarActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <Link href="/signin">
        <Button variant="outline" size="md">
          Sign in
        </Button>
      </Link>

      <Link href="/demo">
        <Button
          variant="primary"
          size="md"
          className="min-w-41.25 justify-between px-4.25"
        >
          <span>Book a Demo</span>

          <ArrowUpRightIcon className="ml-1.5" />
        </Button>
      </Link>
    </div>
  );
}
