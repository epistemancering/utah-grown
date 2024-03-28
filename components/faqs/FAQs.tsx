import SectionHeading from "@/components/SectionHeading";
import QuestionList from "@/components/faqs/QuestionList";

export default function FAQs() {
  return (
    <section className={"w-full"} id={"faqs"}>
      <SectionHeading>FAQs...</SectionHeading>
      <ul className={"flex flex-col gap-4 p-0"}>
        <QuestionList />
      </ul>
    </section>
  );
}
