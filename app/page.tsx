import Typography from "@/components/typography/Typography"
import TextInput from "@/components/data-entry/TextInput"
import Dropdown from "@/components/data-entry/Dropdown"
import Toast from "@/components/feedback/Toast"
import Alert from "@/components/feedback/Alert"

export default function Home() {
  return (
    <main className="container mx-auto p-8">
      <Typography.H1>Design System</Typography.H1>
      <Typography.P className="mb-8">
        A comprehensive design system with typography, data entry, and feedback components.
      </Typography.P>

      <section className="mb-12">
        <Typography.H2 className="mb-4">Typography</Typography.H2>
        <div className="space-y-4">
          <Typography.H1>Heading 1</Typography.H1>
          <Typography.H2>Heading 2</Typography.H2>
          <Typography.H3>Heading 3</Typography.H3>
          <Typography.H4>Heading 4</Typography.H4>
          <Typography.H5>Heading 5</Typography.H5>
          <Typography.H6>Heading 6</Typography.H6>
          <Typography.P>Paragraph text</Typography.P>
          <Typography.Label>Label text</Typography.Label>
          <Typography.Caption>Caption text</Typography.Caption>
          <Typography.Helper>Helper text</Typography.Helper>
        </div>
      </section>

      <section className="mb-12">
        <Typography.H2 className="mb-4">Data Entry</Typography.H2>
        <div className="space-y-6 max-w-md">
          <div>
            <TextInput label="Text Input" placeholder="Enter some text" helperText="This is a standard text input" />
          </div>
          <div>
            <Dropdown
              label="Dropdown"
              options={[
                { value: "option1", label: "Option 1" },
                { value: "option2", label: "Option 2" },
                { value: "option3", label: "Option 3" },
              ]}
              placeholder="Select an option"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <Typography.H2 className="mb-4">Feedback</Typography.H2>
        <div className="space-y-4">
          <Alert variant="info" title="Information" message="This is an informational alert." />
          <Alert variant="success" title="Success" message="Your action was completed successfully." />
          <Alert variant="warning" title="Warning" message="Please be aware of this important notice." />
          <Alert variant="error" title="Error" message="Something went wrong. Please try again." />

          <div className="mt-8">
            <Typography.P className="mb-2">Toast examples are shown below:</Typography.P>
            <Toast variant="info" message="This is an informational toast message" isVisible={true} />
          </div>
        </div>
      </section>
    </main>
  )
}
