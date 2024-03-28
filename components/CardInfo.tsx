import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ExplainerSection from "@/components/ExplainerSection";

export default function CardInfo() {
  return (
    <section
      className={"flex flex-col gap-x-24 xl:flex-row"}
      id={"medicalcardinfo"}
    >
      <div className={"w-full"}>
        <Image
          className={"h-auto w-full max-w-3xl"}
          height={699}
          width={811}
          src={"/Consultation@2x.png"}
          sizes={"(min-width: 1280px) calc(37.5vw - 48px), 75vw"}
          alt={"Pharmacist Consulting"}
        />
      </div>
      <div className={"w-full"}>
        <SectionHeading className={"my-9"}>Utah Medical Cards</SectionHeading>
        <ExplainerSection>
          A medical cannabis card, also known as a medical marijuana card, is a
          state-issued identification card that allows qualified patients to
          legally purchase and use medical cannabis for the treatment of
          specific medical conditions. In Utah, a card is required to access and
          purchase medical cannabis products from state-licensed dispensaries.
          Having a medical card does not allow you to possess any cannabis
          product but only the products you purchased under your PAT (Medical
          Card ID number).
        </ExplainerSection>
      </div>
    </section>
  );
}
