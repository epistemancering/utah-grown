import Image from "next/image";
import LegalLink from "@/components/footer/LegalLink";

export default function Footer() {
  return (
    <footer
      className={
        "flex w-full flex-col items-center border-x-0 border-y-4 border-solid font-['Proxima_Nova_Regular']"
      }
    >
      <div className={"flex w-3/4 flex-row items-end gap-x-12 p-5"}>
        <Image
          className={"h-auto w-96 max-w-full"}
          height={171}
          width={384}
          src={"/UtahGrownLogo-Green@2x.png"}
          sizes={"(min-width: 929px) 384px, 75vw"}
          alt={"Utah Grown"}
        />
        <p className={"m-0 text-lg xl:text-3xl"}>UTAH’S CANNABIS COMMUNITY</p>
      </div>
      <div className={"flex h-40 w-full justify-center bg-greentwo"}>
        <div
          className={
            "flex w-3/4 flex-wrap items-start justify-end gap-x-14 p-4 text-3xl"
          }
        >
          <p className={"m-0 text-greythree"}>🛇2024 No Rights Possessed.</p>
          <LegalLink href={""}>Terms and Conditions</LegalLink>
          <LegalLink href={""}>Privacy Policy</LegalLink>
        </div>
      </div>
    </footer>
  );
}
