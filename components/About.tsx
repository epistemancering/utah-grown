import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ExplainerSection from "@/components/ExplainerSection";
import SectionSubheading from "@/components/SectionSubheading";

export default function About() {
  return (
    <section
      className={"flex w-full flex-col items-end xl:flex-row"}
      id={"about"}
    >
      <div className={"pb-44 xl:w-1/2"}>
        <SectionHeading>About Utah Grown</SectionHeading>
        <ExplainerSection>
          Utah Grown serves as your primary resource for accessing medical
          cannabis cards in Utah. Our mission is to simplify the process for
          patients, offering a stress-free and cost-effective method to obtain
          their first-time card or renewals. In 2023, Utah Grown has proudly
          assisted over 2,200 patients in securing their medical cards and
          renewing existing ones.
        </ExplainerSection>
        <SectionSubheading>Utah Grown Office</SectionSubheading>
        <a
          className={"text-3xl text-greytwo no-underline xl:text-4xl"}
          href={"https://maps.app.goo.gl/cBaHDPekQ89ktSwr5"}
          target={"_blank"}
        >
          <p className={"my-2.5"}>730 State Street</p>
          <p className={"my-2.5"}>Salt Lake City, Utah 84111</p>
        </a>
      </div>
      <div className={"xl:w-1/2"}>
        <Image
          className={"-mb-6 h-auto w-full"}
          height={1404}
          width={1136}
          src={"/NormalizeItUtah@2x.png"}
          sizes={"(min-width: 1280px) 37.5vw, 75vw"}
          alt={"#Normalize It"}
        />
      </div>
    </section>
  );
}
