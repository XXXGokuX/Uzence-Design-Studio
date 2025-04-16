"use client"

import type React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react"
import Typography from "@/components/typography/Typography"

export interface AlertProps {
  variant: "info" | "success" | "warning" | "error"
  title?: string
  message: string
  onClose?: () => void
  className?: string
  icon?: React.ReactNode
  actions?: React.ReactNode
}

const Alert: React.FC<AlertProps> = ({ variant = "info", title, message, onClose, className, icon, actions }) => {
  const variantStyles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-950",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-800 dark:text-blue-200",
      icon: icon || <Info className="h-5 w-5 text-blue-500" />,
    },
    success: {
      bg: "bg-green-50 dark:bg-green-950",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-800 dark:text-green-200",
      icon: icon || <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-950",
      border: "border-yellow-200 dark:border-yellow-800",
      text: "text-yellow-800 dark:text-yellow-200",
      icon: icon || <AlertCircle className="h-5 w-5 text-yellow-500" />,
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-800 dark:text-red-200",
      icon: icon || <XCircle className="h-5 w-5 text-red-500" />,
    },
  }

  return (
    <div
      role="alert"
      className={cn("rounded-lg border p-4", variantStyles[variant].bg, variantStyles[variant].border, className)}
    >
      <div className="flex">
        <div className="flex-shrink-0">{variantStyles[variant].icon}</div>
        <div className="ml-3 flex-1">
          {title && (
            <Typography.Label className={cn("font-medium", variantStyles[variant].text)}>{title}</Typography.Label>
          )}
          <Typography.P className={cn("mt-1 text-sm", variantStyles[variant].text)}>{message}</Typography.P>
          {actions && <div className="mt-4">{actions}</div>}
        </div>
        {onClose && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "inline-flex rounded-md p-1.5",
                  "focus:outline-none focus:ring-2 focus:ring-offset-2",
                  "text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800",
                )}
                aria-label="Dismiss"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Alert
