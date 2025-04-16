"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react"
import { createPortal } from "react-dom"

export interface ToastProps {
  variant: "info" | "success" | "warning" | "error"
  message: string
  title?: string
  duration?: number
  isVisible?: boolean
  onClose?: () => void
  position?: "top-right" | "top-left" | "bottom-right" | "bottom-left" | "top-center" | "bottom-center"
  className?: string
}

const Toast: React.FC<ToastProps> = ({
  variant = "info",
  message,
  title,
  duration = 5000,
  isVisible = false,
  onClose,
  position = "top-right",
  className,
}) => {
  const [visible, setVisible] = useState(isVisible)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  useEffect(() => {
    setVisible(isVisible)
  }, [isVisible])

  useEffect(() => {
    if (visible && duration !== Number.POSITIVE_INFINITY) {
      const timer = setTimeout(() => {
        setVisible(false)
        onClose?.()
      }, duration)

      return () => clearTimeout(timer)
    }
  }, [visible, duration, onClose])

  const handleClose = () => {
    setVisible(false)
    onClose?.()
  }

  const variantStyles = {
    info: {
      bg: "bg-blue-50 dark:bg-blue-950",
      border: "border-blue-200 dark:border-blue-800",
      text: "text-blue-800 dark:text-blue-200",
      icon: <Info className="h-5 w-5 text-blue-500" />,
    },
    success: {
      bg: "bg-green-50 dark:bg-green-950",
      border: "border-green-200 dark:border-green-800",
      text: "text-green-800 dark:text-green-200",
      icon: <CheckCircle className="h-5 w-5 text-green-500" />,
    },
    warning: {
      bg: "bg-yellow-50 dark:bg-yellow-950",
      border: "border-yellow-200 dark:border-yellow-800",
      text: "text-yellow-800 dark:text-yellow-200",
      icon: <AlertCircle className="h-5 w-5 text-yellow-500" />,
    },
    error: {
      bg: "bg-red-50 dark:bg-red-950",
      border: "border-red-200 dark:border-red-800",
      text: "text-red-800 dark:text-red-200",
      icon: <XCircle className="h-5 w-5 text-red-500" />,
    },
  }

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  }

  const toastContent = (
    <div
      role="alert"
      aria-live="assertive"
      className={cn(
        "fixed z-50 transform transition-all duration-300 ease-in-out",
        positionClasses[position],
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2",
        "max-w-sm w-full shadow-lg rounded-lg pointer-events-auto",
        variantStyles[variant].bg,
        "border",
        variantStyles[variant].border,
        className,
      )}
    >
      <div className="p-4">
        <div className="flex items-start">
          <div className="flex-shrink-0">{variantStyles[variant].icon}</div>
          <div className="ml-3 w-0 flex-1">
            {title && <p className={cn("text-sm font-medium", variantStyles[variant].text)}>{title}</p>}
            <p className={cn("text-sm", variantStyles[variant].text)}>{message}</p>
          </div>
          <div className="ml-4 flex-shrink-0 flex">
            <button
              type="button"
              className={cn(
                "bg-transparent rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500",
              )}
              onClick={handleClose}
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )

  if (!mounted) {
    return null
  }

  return createPortal(toastContent, document.body)
}

export default Toast
