import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <section className="">
      <h1 className="text-4xl font-bold text-center"> Question & Answer</h1>
      <div className="flex items-center justify-center min-h-screen">
        <Accordion type="single" collapsible className="w-1/2">
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What is the purpose of this website?
            </AccordionTrigger>
            <AccordionContent>
              This website aims to provide users with a platform to generate
              images based on their prompts. It leverages advanced algorithms to
              create unique and visually appealing images according to user
              input.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              How do I use the image generation feature?
            </AccordionTrigger>
            <AccordionContent>
              To generate an image, simply enter your prompt or description in
              the provided input field, and then click the "Generate" button.
              The system will process your input and display the generated image
              in real-time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Is there a limit to the number of images I can generate?
            </AccordionTrigger>
            <AccordionContent>
              There is no strict limit on the number of images you can generate.
              However, to ensure fair usage and server performance, we recommend
              limiting the number of requests per minute. If you have specific
              requirements, please check our documentation for any rate limits
              or guidelines.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can I customize the generated images?
            </AccordionTrigger>
            <AccordionContent>
              Yes, you can customize the generated images to some extent.
              Depending on the features of the platform, you may be able to
              adjust parameters such as colors, styles, and sizes. Be sure to
              explore the available customization options provided on the
              website.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Is the image generation process instant?
            </AccordionTrigger>
            <AccordionContent>
              The speed of image generation may vary depending on server load
              and complexity of the prompt. In most cases, you should receive
              your generated image within a few seconds. For more complex
              requests, it may take a bit longer.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              Is there a cost associated with using this service?
            </AccordionTrigger>
            <AccordionContent>
              The use of this image generation service is currently free of
              charge. However, there may be premium features or usage tiers
              available in the future, so please check our pricing page for
              updates.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
