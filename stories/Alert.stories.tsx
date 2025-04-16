import type { Meta, StoryObj } from "@storybook/react"
import Alert from "@/components/feedback/Alert"
import { Button } from "@/components/ui/button"

const meta: Meta<typeof Alert> = {
  title: "Design System/Feedback/Alert",
  component: Alert,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Alert component for displaying important messages to users.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      defaultValue: "info",
    },
  },
}

export default meta
type Story = StoryObj<typeof Alert>

// Info Alert
export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    message: "This is an informational alert message.",
  },
}

// Success Alert
export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    message: "Your action was completed successfully.",
  },
}

// Warning Alert
export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    message: "Please be aware of this important notice.",
  },
}

// Error Alert
export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    message: "Something went wrong. Please try again.",
  },
}

// Without Title
export const WithoutTitle: Story = {
  args: {
    variant: "info",
    message: "This is an alert message without a title.",
  },
}

// With Close Button
export const WithCloseButton: Story = {
  args: {
    variant: "info",
    title: "Dismissible Alert",
    message: "This alert can be dismissed by clicking the X button.",
    onClose: () => console.log("Alert closed"),
  },
}

// With Actions
export const WithActions: Story = {
  args: {
    variant: "warning",
    title: "Action Required",
    message: "Your account needs verification. Please verify your email address.",
    actions: (
      <div className="flex space-x-2 mt-2">
        <Button size="sm" variant="default">
          Verify Now
        </Button>
        <Button size="sm" variant="outline">
          Remind Me Later
        </Button>
      </div>
    ),
  },
}

// All Variants
export const AllVariants: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-md">
      <Alert variant="info" title="Information" message="This is an informational alert." />
      <Alert variant="success" title="Success" message="Your action was completed successfully." />
      <Alert variant="warning" title="Warning" message="Please be aware of this important notice." />
      <Alert variant="error" title="Error" message="Something went wrong. Please try again." />
    </div>
  ),
}
