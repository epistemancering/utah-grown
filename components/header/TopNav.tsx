import AnchorLink from "@/components/header/AnchorLink";

export default function TopNav() {
  return (
    <nav className={"absolute top-1 z-10 flex w-full justify-center xl:top-16"}>
      <div className={"flex w-2/3 flex-wrap justify-around gap-1"}>
        <AnchorLink href={"#appointments"}>APPOINTMENTS</AnchorLink>
        <AnchorLink href={"#medicalcardinfo"}>MEDICAL CARD INFO</AnchorLink>
        <AnchorLink href={"#faqs"}>FAQs</AnchorLink>
        <AnchorLink href={"#pharmacies"}>PHARMACIES</AnchorLink>
        <AnchorLink href={"#about"}>ABOUT</AnchorLink>
      </div>
    </nav>
  );
}
