import type React from "react"
import { cn } from "@/lib/utils"

// Define typography tokens
const fontSizes = {
  h1: "text-4xl md:text-5xl",
  h2: "text-3xl md:text-4xl",
  h3: "text-2xl md:text-3xl",
  h4: "text-xl md:text-2xl",
  h5: "text-lg md:text-xl",
  h6: "text-base md:text-lg",
  p: "text-base",
  label: "text-sm",
  caption: "text-xs",
  helper: "text-xs",
}

const fontWeights = {
  h1: "font-bold",
  h2: "font-bold",
  h3: "font-semibold",
  h4: "font-semibold",
  h5: "font-medium",
  h6: "font-medium",
  p: "font-normal",
  label: "font-medium",
  caption: "font-normal",
  helper: "font-normal",
}

const lineHeights = {
  h1: "leading-tight",
  h2: "leading-tight",
  h3: "leading-snug",
  h4: "leading-snug",
  h5: "leading-normal",
  h6: "leading-normal",
  p: "leading-relaxed",
  label: "leading-normal",
  caption: "leading-normal",
  helper: "leading-normal",
}

const letterSpacings = {
  h1: "tracking-tight",
  h2: "tracking-tight",
  h3: "tracking-normal",
  h4: "tracking-normal",
  h5: "tracking-normal",
  h6: "tracking-normal",
  p: "tracking-normal",
  label: "tracking-wide",
  caption: "tracking-wide",
  helper: "tracking-normal",
}

// Base typography props
interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode
  className?: string
}

// Component definitions
const H1: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <h1
    className={cn(fontSizes.h1, fontWeights.h1, lineHeights.h1, letterSpacings.h1, "text-foreground", className)}
    {...props}
  >
    {children}
  </h1>
)

const H2: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <h2
    className={cn(fontSizes.h2, fontWeights.h2, lineHeights.h2, letterSpacings.h2, "text-foreground", className)}
    {...props}
  >
    {children}
  </h2>
)

const H3: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <h3
    className={cn(fontSizes.h3, fontWeights.h3, lineHeights.h3, letterSpacings.h3, "text-foreground", className)}
    {...props}
  >
    {children}
  </h3>
)

const H4: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <h4
    className={cn(fontSizes.h4, fontWeights.h4, lineHeights.h4, letterSpacings.h4, "text-foreground", className)}
    {...props}
  >
    {children}
  </h4>
)

const H5: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <h5
    className={cn(fontSizes.h5, fontWeights.h5, lineHeights.h5, letterSpacings.h5, "text-foreground", className)}
    {...props}
  >
    {children}
  </h5>
)

const H6: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <h6
    className={cn(fontSizes.h6, fontWeights.h6, lineHeights.h6, letterSpacings.h6, "text-foreground", className)}
    {...props}
  >
    {children}
  </h6>
)

const P: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <p
    className={cn(fontSizes.p, fontWeights.p, lineHeights.p, letterSpacings.p, "text-foreground", className)}
    {...props}
  >
    {children}
  </p>
)

const Label: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <span
    className={cn(
      fontSizes.label,
      fontWeights.label,
      lineHeights.label,
      letterSpacings.label,
      "text-foreground block",
      className,
    )}
    {...props}
  >
    {children}
  </span>
)

const Caption: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <span
    className={cn(
      fontSizes.caption,
      fontWeights.caption,
      lineHeights.caption,
      letterSpacings.caption,
      "text-muted-foreground block",
      className,
    )}
    {...props}
  >
    {children}
  </span>
)

const Helper: React.FC<TypographyProps> = ({ children, className, ...props }) => (
  <span
    className={cn(
      fontSizes.helper,
      fontWeights.helper,
      lineHeights.helper,
      letterSpacings.helper,
      "text-muted-foreground block mt-1",
      className,
    )}
    {...props}
  >
    {children}
  </span>
)

// Export as a compound component
const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
  P,
  Label,
  Caption,
  Helper,
}

export default Typography
