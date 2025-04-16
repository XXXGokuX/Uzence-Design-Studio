import type { Meta, StoryObj } from "@storybook/react"
import Typography from "@/components/typography/Typography"

const meta: Meta = {
  title: "Design System/Typography",
  component: Typography.P,
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Typography components for consistent text styling across the application.",
      },
    },
  },
}

export default meta

// Heading 1
export const Heading1: StoryObj = {
  render: () => <Typography.H1>Heading 1</Typography.H1>,
  parameters: {
    docs: {
      description: {
        story: "The largest heading style, typically used for page titles.",
      },
    },
  },
}

// Heading 2
export const Heading2: StoryObj = {
  render: () => <Typography.H2>Heading 2</Typography.H2>,
  parameters: {
    docs: {
      description: {
        story: "Used for section titles within a page.",
      },
    },
  },
}

// Heading 3
export const Heading3: StoryObj = {
  render: () => <Typography.H3>Heading 3</Typography.H3>,
}

// Heading 4
export const Heading4: StoryObj = {
  render: () => <Typography.H4>Heading 4</Typography.H4>,
}

// Heading 5
export const Heading5: StoryObj = {
  render: () => <Typography.H5>Heading 5</Typography.H5>,
}

// Heading 6
export const Heading6: StoryObj = {
  render: () => <Typography.H6>Heading 6</Typography.H6>,
}

// Paragraph
export const Paragraph: StoryObj = {
  render: () => (
    <Typography.P>This is a standard paragraph text used for body content throughout the application.</Typography.P>
  ),
  parameters: {
    docs: {
      description: {
        story: "Standard paragraph text for body content.",
      },
    },
  },
}

// Label
export const Label: StoryObj = {
  render: () => <Typography.Label>Form Field Label</Typography.Label>,
  parameters: {
    docs: {
      description: {
        story: "Used for form field labels and other labeling needs.",
      },
    },
  },
}

// Caption
export const Caption: StoryObj = {
  render: () => <Typography.Caption>Image caption or small descriptive text</Typography.Caption>,
  parameters: {
    docs: {
      description: {
        story: "Used for captions, credits, and other small descriptive text.",
      },
    },
  },
}

// Helper Text
export const HelperText: StoryObj = {
  render: () => <Typography.Helper>Helper text provides additional guidance for form fields</Typography.Helper>,
  parameters: {
    docs: {
      description: {
        story: "Used for form field helper text, hints, and other secondary information.",
      },
    },
  },
}

// Typography System
export const TypographySystem: StoryObj = {
  render: () => (
    <div className="space-y-6">
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.H4>Heading 4</Typography.H4>
      <Typography.H5>Heading 5</Typography.H5>
      <Typography.H6>Heading 6</Typography.H6>
      <Typography.P>
        This is a paragraph with standard text styling. It should be used for the main content of your application.
      </Typography.P>
      <div>
        <Typography.Label>This is a label</Typography.Label>
        <Typography.P className="mt-1">Associated content</Typography.P>
      </div>
      <div>
        <Typography.Caption>This is a caption text</Typography.Caption>
      </div>
      <div>
        <Typography.Helper>This is helper text providing additional context</Typography.Helper>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "The complete typography system showing all text elements together.",
      },
    },
  },
}

// Dark Mode
export const DarkMode: StoryObj = {
  render: () => (
    <div className="p-6 bg-gray-900 text-white space-y-4">
      <Typography.H2>Typography in Dark Mode</Typography.H2>
      <Typography.P>This demonstrates how typography components adapt to dark mode.</Typography.P>
      <Typography.Label>Form Label in Dark Mode</Typography.Label>
      <Typography.Helper>Helper text in dark mode provides additional context</Typography.Helper>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: "Typography components automatically adapt to dark mode when used within a dark theme context.",
      },
    },
  },
}
