import Link from "next/link";
import { Section } from "./misc/Section";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { DefaultIcon } from "./sharedComponents";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Header = () => {
  return (
    <header className="sticky top-0 py-3 z-50 bg-card bg-clip-padding bg-opacity-80">
      <Section className="flex items-baseline">
        <h1 className="text-lg font-semibold text-primary">
          <Link href="#hero">pranay.vure</Link>
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://www.linkedin.com/in/pranay-vure-0903641b2/"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            {/* <LinkedInIcon size={12} className="text-foreground" /> */}
            <DefaultIcon
              fontSize={12.7}
              className="text-foreground -mt-0 rounded-[2.5px]"
              icon={"bi:linkedin"}
            />
          </Link>

          <Link
            href="https://github.com/pvure"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <DefaultIcon
              fontSize={15.25}
              className="text-foreground -mt-[0.5px]"
              icon={"jam:github"}
            />
          </Link>

          <Link
            href="https://scholar.google.com/citations?user=-y94r58AAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <Icon icon={"academicons:google-scholar"} className="rounded-[4px] text-foreground" />
          </Link>
          <Link
            href="Pranay_2025_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "px-[4.5px] h-6"
            )}
          >
            <DefaultIcon
              fontSize={13}
              className="text-foreground -mt-0"
              icon={"solar:file-bold"}
            />

            <p className="text-foreground m-0 leading-none text-xs inline max-sm:hidden ml-1">
              CV
            </p>
          </Link>
        </ul>
      </Section>
    </header>
  );
};