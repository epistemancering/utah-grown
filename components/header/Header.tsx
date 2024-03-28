import Image from "next/image";
import TopNav from "@/components/header/TopNav";

export default function Header() {
  return (
    <header className={"relative w-full"}>
      <TopNav />
      <Image
        className={"block h-auto w-full"}
        height={1186}
        width={3300}
        priority
        src={"/TopHeaderImage@2x.png"}
        sizes={"100vw"}
        alt={"Utah Landscape background"}
      />
      <div className={"relative h-16 bg-greentwo"}>
        <div className={"absolute bottom-2 flex w-full justify-center"}>
          <Image
            className={"h-auto w-3/4 max-w-4xl"}
            height={429}
            width={896}
            src={"/UtahGrownLogoWhiteBorder@2x.png"}
            sizes={"(min-width: 1195px) 896px, 75vw"}
            alt={"Utah Grown"}
          />
        </div>
      </div>
      <h1
        className={
          "mb-12 mt-4 text-center font-['Proxima_Nova_Regular'] text-3xl font-normal xl:text-5xl"
        }
      >
        Utah’s Cannabis Community
      </h1>
    </header>
  );
}
