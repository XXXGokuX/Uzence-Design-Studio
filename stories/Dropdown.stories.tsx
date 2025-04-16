import type { Meta, StoryObj } from "@storybook/react"
import Dropdown from "@/components/data-entry/Dropdown"

const meta: Meta<typeof Dropdown> = {
  title: "Design System/Data Entry/Dropdown",
  component: Dropdown,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Dropdown component for selecting an option from a list.",
      },
    },
  },
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      defaultValue: "md",
    },
    disabled: {
      control: "boolean",
      defaultValue: false,
    },
    fullWidth: {
      control: "boolean",
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof Dropdown>

const defaultOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
]

// Default
export const Default: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Choose an option",
  },
}

// With Selected Value
export const WithSelectedValue: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    value: "option2",
  },
}

// With Helper Text
export const WithHelperText: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Choose an option",
    helperText: "This is some helpful information about this field",
  },
}

// With Error
export const WithError: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Choose an option",
    error: "Please select a valid option",
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Choose an option",
    disabled: true,
  },
}

// With Disabled Options
export const WithDisabledOptions: Story = {
  args: {
    label: "Select an option",
    options: [
      { value: "option1", label: "Option 1" },
      { value: "option2", label: "Option 2", disabled: true },
      { value: "option3", label: "Option 3" },
      { value: "option4", label: "Option 4", disabled: true },
      { value: "option5", label: "Option 5" },
    ],
    placeholder: "Choose an option",
  },
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <Dropdown label="Small Dropdown" options={defaultOptions} placeholder="Small size" size="sm" />
      <Dropdown label="Medium Dropdown" options={defaultOptions} placeholder="Medium size (default)" size="md" />
      <Dropdown label="Large Dropdown" options={defaultOptions} placeholder="Large size" size="lg" />
    </div>
  ),
}

// Full Width
export const FullWidth: Story = {
  args: {
    label: "Select an option",
    options: defaultOptions,
    placeholder: "Choose an option",
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: "Dropdown that takes up the full width of its container.",
      },
    },
  },
}
