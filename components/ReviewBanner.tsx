import Image from "next/image";

export default function ReviewBanner() {
  return (
    <section className={"w-full"}>
      <a
        className={"block"}
        href={"https://maps.app.goo.gl/3kSCcTBo8RarzEzU6"}
        target={"_blank"}
      >
        {/* This extra <div> is necessary because just making the <a> relative causes a bug in Firefox and Safari. */}
        <div className={"relative"}>
          <Image
            className={"block h-60 w-full object-cover"}
            height={361}
            width={2364}
            src={"/Review Banner@2x.png"}
            sizes={"75vw"}
            alt={"Review"}
          />
          <div
            className={
              "absolute top-0 flex h-full w-full flex-col items-center justify-center gap-6 xl:left-20 xl:items-start"
            }
          >
            <p
              className={
                "m-0 font-['Proxima_Nova_Regular'] text-2xl text-greythree xl:text-6xl"
              }
            >
              We’d love to hear from you!
            </p>
            <p
              className={
                "m-0 rounded-full bg-tantwo px-14 py-5 text-xl text-greentwo xl:text-4xl"
              }
            >
              Review us here!
            </p>
          </div>
        </div>
      </a>
    </section>
  );
}
