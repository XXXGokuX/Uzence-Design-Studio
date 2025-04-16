import type { Meta, StoryObj } from "@storybook/react"
import TextInput from "@/components/data-entry/TextInput"
import { Mail, Search, User } from "lucide-react"

const meta: Meta<typeof TextInput> = {
  title: "Design System/Data Entry/TextInput",
  component: TextInput,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Text input component for collecting user input in forms.",
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
    isPassword: {
      control: "boolean",
      defaultValue: false,
    },
  },
}

export default meta
type Story = StoryObj<typeof TextInput>

// Default
export const Default: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    helperText: "We'll never share your email with anyone else.",
  },
}

// With Icon
export const WithIcon: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    leftIcon: <Mail size={18} />,
  },
}

// With Error
export const WithError: Story = {
  args: {
    label: "Email",
    placeholder: "Enter your email",
    value: "invalid-email",
    error: "Please enter a valid email address",
  },
}

// Password Input
export const Password: Story = {
  args: {
    label: "Password",
    placeholder: "Enter your password",
    isPassword: true,
    helperText: "Password must be at least 8 characters",
  },
}

// Disabled
export const Disabled: Story = {
  args: {
    label: "Username",
    placeholder: "Enter your username",
    disabled: true,
    value: "johndoe",
  },
}

// Sizes
export const Sizes: Story = {
  render: () => (
    <div className="space-y-4">
      <TextInput label="Small Input" placeholder="Small size" size="sm" />
      <TextInput label="Medium Input" placeholder="Medium size (default)" size="md" />
      <TextInput label="Large Input" placeholder="Large size" size="lg" />
    </div>
  ),
}

// Search Input
export const SearchInput: Story = {
  args: {
    placeholder: "Search...",
    leftIcon: <Search size={18} />,
    fullWidth: true,
  },
}

// All States
export const AllStates: Story = {
  render: () => (
    <div className="space-y-6 w-80">
      <TextInput label="Default" placeholder="Default state" />
      <TextInput label="Focused" placeholder="Click to focus" helperText="This shows the focused state when clicked" />
      <TextInput label="With Value" value="John Doe" />
      <TextInput label="With Error" value="invalid-input" error="This field has an error" />
      <TextInput label="Disabled" value="Cannot edit this" disabled />
      <TextInput label="With Icon" placeholder="Enter username" leftIcon={<User size={18} />} />
      <TextInput label="Password" placeholder="Enter password" isPassword />
    </div>
  ),
}
