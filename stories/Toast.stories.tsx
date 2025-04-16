import type { Meta, StoryObj } from "@storybook/react"
import Toast from "@/components/feedback/Toast"

const meta: Meta<typeof Toast> = {
  title: "Design System/Feedback/Toast",
  component: Toast,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Toast notification component for displaying temporary messages.",
      },
    },
  },
  argTypes: {
    variant: {
      control: "select",
      options: ["info", "success", "warning", "error"],
      defaultValue: "info",
    },
    position: {
      control: "select",
      options: ["top-right", "top-left", "bottom-right", "bottom-left", "top-center", "bottom-center"],
      defaultValue: "top-right",
    },
    duration: {
      control: "number",
      defaultValue: 5000,
    },
    isVisible: {
      control: "boolean",
      defaultValue: true,
    },
  },
}

export default meta
type Story = StoryObj<typeof Toast>

// Info Toast
export const Info: Story = {
  args: {
    variant: "info",
    title: "Information",
    message: "This is an informational message",
    isVisible: true,
  },
}

// Success Toast
export const Success: Story = {
  args: {
    variant: "success",
    title: "Success",
    message: "Your action was completed successfully",
    isVisible: true,
  },
}

// Warning Toast
export const Warning: Story = {
  args: {
    variant: "warning",
    title: "Warning",
    message: "Please be aware of this important notice",
    isVisible: true,
  },
}

// Error Toast
export const Error: Story = {
  args: {
    variant: "error",
    title: "Error",
    message: "Something went wrong. Please try again",
    isVisible: true,
  },
}

// Without Title
export const WithoutTitle: Story = {
  args: {
    variant: "info",
    message: "This is a toast message without a title",
    isVisible: true,
  },
}

// Different Positions
export const Positions: Story = {
  render: () => (
    <div className="h-screen w-screen relative">
      <Toast variant="info" message="Top Right Toast" position="top-right" isVisible={true} />
      <Toast variant="success" message="Top Left Toast" position="top-left" isVisible={true} />
      <Toast variant="warning" message="Bottom Right Toast" position="bottom-right" isVisible={true} />
      <Toast variant="error" message="Bottom Left Toast" position="bottom-left" isVisible={true} />
      <Toast variant="info" message="Top Center Toast" position="top-center" isVisible={true} />
      <Toast variant="success" message="Bottom Center Toast" position="bottom-center" isVisible={true} />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Toast notifications can be positioned in different corners of the screen.",
      },
    },
  },
}
