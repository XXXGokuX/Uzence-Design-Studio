"use client"

import type React from "react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Typography from "@/components/typography/Typography"
import { AlertCircle, Eye, EyeOff } from "lucide-react"

export interface TextInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string
  helperText?: string
  error?: string
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  isPassword?: boolean
}

const TextInput: React.FC<TextInputProps> = ({
  label,
  helperText,
  error,
  leftIcon,
  rightIcon,
  size = "md",
  fullWidth = false,
  isPassword = false,
  className,
  disabled,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [isFocused, setIsFocused] = useState(false)

  const sizeClasses = {
    sm: "h-8 text-xs px-2",
    md: "h-10 text-sm px-3",
    lg: "h-12 text-base px-4",
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const inputType = isPassword ? (showPassword ? "text" : "password") : props.type || "text"

  return (
    <div className={cn("flex flex-col", fullWidth ? "w-full" : "max-w-sm", className)}>
      {label && (
        <Typography.Label className="mb-1.5" htmlFor={props.id}>
          {label}
        </Typography.Label>
      )}

      <div className="relative">
        {leftIcon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">{leftIcon}</div>
        )}

        <input
          {...props}
          type={inputType}
          disabled={disabled}
          className={cn(
            "rounded-md border bg-background text-foreground",
            "focus:outline-none focus:ring-2 focus:ring-ring focus:border-input",
            "transition-colors",
            sizeClasses[size],
            leftIcon ? "pl-10" : "",
            rightIcon || isPassword ? "pr-10" : "",
            error ? "border-destructive focus:ring-destructive/50" : "border-input",
            disabled ? "opacity-50 cursor-not-allowed bg-muted" : "",
            fullWidth ? "w-full" : "w-full max-w-sm",
          )}
          onFocus={(e) => {
            setIsFocused(true)
            props.onFocus?.(e)
          }}
          onBlur={(e) => {
            setIsFocused(false)
            props.onBlur?.(e)
          }}
        />

        {isPassword && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            tabIndex={-1}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        )}

        {rightIcon && !isPassword && (
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground">{rightIcon}</div>
        )}
      </div>

      {error ? (
        <div className="flex items-center mt-1.5 text-destructive">
          <AlertCircle size={14} className="mr-1" />
          <Typography.Helper className="text-destructive">{error}</Typography.Helper>
        </div>
      ) : helperText ? (
        <Typography.Helper>{helperText}</Typography.Helper>
      ) : null}
    </div>
  )
}

export default TextInput
