"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { cn } from "@/lib/utils"
import Typography from "@/components/typography/Typography"
import { ChevronDown, ChevronUp, Check, AlertCircle } from "lucide-react"

export interface DropdownOption {
  value: string
  label: string
  disabled?: boolean
}

export interface DropdownProps {
  options: DropdownOption[]
  value?: string
  onChange?: (value: string) => void
  label?: string
  placeholder?: string
  helperText?: string
  error?: string
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  fullWidth?: boolean
  className?: string
  id?: string
}

const Dropdown: React.FC<DropdownProps> = ({
  options,
  value,
  onChange,
  label,
  placeholder = "Select an option",
  helperText,
  error,
  disabled = false,
  size = "md",
  fullWidth = false,
  className,
  id,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value)
  const dropdownRef = useRef<HTMLDivElement>(null)

  const sizeClasses = {
    sm: "h-8 text-xs",
    md: "h-10 text-sm",
    lg: "h-12 text-base",
  }

  useEffect(() => {
    setSelectedValue(value)
  }, [value])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleSelect = (option: DropdownOption) => {
    if (option.disabled) return

    setSelectedValue(option.value)
    onChange?.(option.value)
    setIsOpen(false)
  }

  const selectedOption = options.find((option) => option.value === selectedValue)
  const displayText = selectedOption ? selectedOption.label : placeholder

  const toggleDropdown = () => {
    if (!disabled) {
      setIsOpen(!isOpen)
    }
  }

  const uniqueId = id || `dropdown-${Math.random().toString(36).substring(2, 9)}`

  return (
    <div className={cn("relative", fullWidth ? "w-full" : "max-w-sm", className)} ref={dropdownRef}>
      {label && (
        <Typography.Label className="mb-1.5" htmlFor={uniqueId}>
          {label}
        </Typography.Label>
      )}

      <div
        id={uniqueId}
        role="combobox"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
        aria-controls={`${uniqueId}-listbox`}
        aria-labelledby={label ? `${uniqueId}-label` : undefined}
        tabIndex={disabled ? -1 : 0}
        className={cn(
          "flex items-center justify-between px-3 rounded-md border bg-background",
          "cursor-pointer select-none",
          sizeClasses[size],
          error ? "border-destructive" : "border-input",
          disabled ? "opacity-50 cursor-not-allowed bg-muted" : "hover:border-ring",
          fullWidth ? "w-full" : "w-full max-w-sm",
        )}
        onClick={toggleDropdown}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault()
            toggleDropdown()
          } else if (e.key === "Escape" && isOpen) {
            e.preventDefault()
            setIsOpen(false)
          }
        }}
      >
        <span className={cn("truncate", !selectedValue && "text-muted-foreground")}>{displayText}</span>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </div>

      {isOpen && (
        <ul
          id={`${uniqueId}-listbox`}
          role="listbox"
          aria-labelledby={label ? `${uniqueId}-label` : undefined}
          className="absolute z-10 w-full mt-1 max-h-60 overflow-auto rounded-md border border-input bg-background shadow-lg"
        >
          {options.map((option) => (
            <li
              key={option.value}
              role="option"
              aria-selected={selectedValue === option.value}
              className={cn(
                "px-3 py-2 cursor-pointer",
                selectedValue === option.value ? "bg-accent text-accent-foreground" : "text-foreground",
                option.disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-accent hover:text-accent-foreground",
              )}
              onClick={() => handleSelect(option)}
            >
              <div className="flex items-center justify-between">
                <span>{option.label}</span>
                {selectedValue === option.value && <Check size={16} />}
              </div>
            </li>
          ))}
        </ul>
      )}

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

export default Dropdown
