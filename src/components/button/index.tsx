import * as React from "react";
import { cn } from "@/lib/utils";

type Variant = "default" | "secondary" | "ghost";
type Size = "default" | "sm" | "lg" | "icon";

const VARIANTS: Record<Variant, string> = {
  default: "bg-primary text-primary-foreground hover:bg-primary/90",
  secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
  ghost: "hover:bg-accent hover:text-accent-foreground",
};

const SIZES: Record<Size, string> = {
  default: "h-10 px-4 py-2",
  sm: "h-9 px-3",
  lg: "h-12 px-8 text-base",
  icon: "h-10 w-10 p-0",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors disabled:opacity-50",
        VARIANTS[variant],
        SIZES[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
