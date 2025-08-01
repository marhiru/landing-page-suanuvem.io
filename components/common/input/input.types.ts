import { Input } from "@/components/ui/input";
import { VariantProps } from "class-variance-authority";
import { inputVariants } from "./input";

export interface IInputSharedProps 
    extends Omit<React.ComponentPropsWithRef<typeof Input>, 'size'>,
    VariantProps<typeof inputVariants> {
        primitive?: boolean;
        confirmMessage?: string;
    }