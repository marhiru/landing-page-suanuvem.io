import { JSX } from "react";
import { IInputSharedProps } from "./input.types";
import { Input as Base } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export const inputVariants = cva(
  "flex flex-col min-w-80 lg:flex-row has-[input:focus-visible]:ring-2 gap-4 lg:gap-2 ring-ring p-1 transition-all",
  {
    variants: {
      variant: {
        default:
          "bg-input rounded-[var(--radius)] [&>input]:placeholder:text-muted-foreground",
      },
      size: {
        default: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export function Input({
  primitive = true,
  variant,
  size,
  className,
  confirmMessage,
  ...props
}: IInputSharedProps): JSX.Element {
  const Comp = primitive ? "input" : Base;
  return (
    <form className={cn(inputVariants({ variant, size, className }))}>
      <Comp
        className="focus-visible:outline-none h-auto w-full p-1 lg:pl-2 lg:pr-1"
        {...props}
      />
      <Button
        size={"lg"}
        className="bg-primary h-12 flex items-center justify-center text-base text-primary-foreground gap-2 group/button-main"
      >
        {confirmMessage || "Confirmar"}
        <div className="bg-input/20 size-6 text-primary-foreground justify-center items-center flex overflow-clip relative rounded-full p-1">
          <ArrowUpRight className="size-5 absolute -translate-x-3.5 translate-y-3.5 group-hover/button-main:translate-0 duration-200 ease-in-out transition-transform" />
          <ArrowUpRight className="size-5 absolute group-hover/button-main:translate-x-3.5 group-hover/button-main:-translate-y-3.5 duration-200 ease-in-out transition-transform" />
        </div>
      </Button>
    </form>
  );
}
