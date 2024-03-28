import Image from "next/image";

export default function BannerAd() {
  return (
    <section>
      <a
        href={"https://issuu.com/nwleaf/docs/utahleaf_nov2023"}
        target={"_blank"}
      >
        <Image
          className={"h-auto w-full"}
          height={571}
          width={2361}
          src={"/MockBannerAd@2x.png"}
          sizes={"75vw"}
          alt={"Advertisement"}
        />
      </a>
      <p className={"m-0 px-3.5 text-right text-3xl"}>Ad</p>
    </section>
  );
}
