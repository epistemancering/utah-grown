import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import ExplainerSection from "@/components/ExplainerSection";
import TanButton from "@/components/TanButton";
import TopNav from "@/components/header/TopNav";
import SectionSubheading from "@/components/SectionSubheading";
import Appointments from "@/components/appointments/Appointments";
import QuestionList from "@/components/faqs/QuestionList";
import CannabisPharmacy from "@/components/pharmacies/CannabisPharmacy";
import Footer from "@/components/footer/Footer";

export default function Page() {
  return (
    <body
      className={
        "m-0 flex flex-col items-center font-['Proxima_Nova_Semibold'] text-greentwo"
      }
    >
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
      <main
        className={
          "flex w-3/4 flex-col items-center gap-16 text-greytwo xl:gap-32"
        }
      >
        <Appointments />
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
              alt={""}
            />
          </a>
          <p className={"m-0 px-3.5 text-right text-3xl"}>Ad</p>
        </section>
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
            <SectionHeading className={"my-9"}>
              Utah Medical Cards
            </SectionHeading>
            <ExplainerSection>
              A medical cannabis card, also known as a medical marijuana card,
              is a state-issued identification card that allows qualified
              patients to legally purchase and use medical cannabis for the
              treatment of specific medical conditions. In Utah, a card is
              required to access and purchase medical cannabis products from
              state-licensed dispensaries. Having a medical card does not allow
              you to possess any cannabis product but only the products you
              purchased under your PAT (Medical Card ID number).
            </ExplainerSection>
          </div>
        </section>
        <section className={"w-full"}>
          <a
            className={"relative"}
            href={"https://maps.app.goo.gl/3kSCcTBo8RarzEzU6"}
            target={"_blank"}
          >
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
          </a>
        </section>
        <section className={"w-full"} id={"faqs"}>
          <SectionHeading>FAQs...</SectionHeading>
          <ul className={"flex flex-col gap-4 p-0"}>
            <QuestionList />
          </ul>
        </section>
        <section
          className={"flex w-full flex-col items-start"}
          id={"pharmacies"}
        >
          <SectionHeading>Utah Medical Cannabis Pharmacies</SectionHeading>
          <ul className={"flex list-none flex-col gap-9 p-0"}>
            <CannabisPharmacy
              name={"Dragonfly Wellness"}
              locations={[
                {
                  address: "711 S State Street, Salt Lake City UT 84111",
                  tel: "801-413-6945",
                },
                { address: "20 Main St, Price UT 84501", tel: "435-637-3770" },
              ]}
              site={"www.dragonflywellness.com"}
            >
              <TanButton
                label={"New Patient Specials"}
                className={
                  "mt-6 rounded-2xl py-2.5 font-['Proxima_Nova_Regular'] text-xl xl:text-2xl"
                }
                link={"https://dragonflywellness.com/products/specials"}
                external={true}
              />
            </CannabisPharmacy>
            <CannabisPharmacy
              name={"Bloc Dispensary"}
              locations={[
                {
                  address: "10392 S Jordan Gateway, South Jordan UT 84095",
                  tel: "385-249-9400",
                },
                {
                  address: "1624 S Convention Center Dr, St. George UT 84790",
                  tel: "435-216-3400",
                },
              ]}
              site={"www.blocdispensary.com"}
            />
            <CannabisPharmacy
              name={"Beehive Farmacy"}
              locations={[
                {
                  address: "1991 S 3600 W, Salt Lake City UT 84104",
                  tel: "385-212-0088",
                },
                {
                  address: "870 West 1150 South Suite C, Brigham City UT 84032",
                  tel: "435-919-0966",
                },
              ]}
              site={"www.beehivefarmacy.com"}
            />
            <CannabisPharmacy
              name={"Cannabist"}
              locations={[
                {
                  address: "484 S 1750 W, Springville UT 84663",
                  tel: "385-327-0922",
                },
              ]}
              site={"www.gocannabist.com"}
            />
            <CannabisPharmacy
              name={"Curaleaf"}
              locations={[
                {
                  address: "3633 N Thanksgiving Way, Lehi UT 84043",
                  tel: "385-338-8010",
                },
                {
                  address: "1351 Kearns Blvd Suite 110-B, Park City UT 84060",
                  tel: "435-252-1052",
                },
                {
                  address: "222 N Draper Ln, Provo UT 84601",
                  tel: "801-872-7447",
                },
                {
                  address: "757 S 1040 W, Payson UT 84651",
                  tel: "385-404-4422",
                },
              ]}
              site={"www.curaleaf.com"}
            />
            <CannabisPharmacy
              name={"The Flower Shop"}
              locations={[
                {
                  address: "3775 S Wall Ave, Odgen UT 84405",
                  tel: "385-289-1800(Ext 1)",
                },
                {
                  address: "2150 N Main St #1, North Logan UT 84341",
                  tel: "385-289-1800(Ext 2)",
                },
              ]}
              site={"www.theflowershopusa.com"}
            />
            <CannabisPharmacy
              name={"WholesomeCo"}
              locations={[
                {
                  address: "580 W 100 N #1, Bountiful UT 84010",
                  tel: "801-695-4480",
                },
              ]}
              site={"www.wholesome.co"}
            />
            <CannabisPharmacy
              name={"Zion Medicinal"}
              locations={[
                {
                  address: "301 S Main St, Cedar City UT 84720",
                  tel: "435-244-4485",
                },
              ]}
              site={"www.zionmed.co"}
            />
          </ul>
        </section>
        <section
          className={"flex w-full flex-col items-end xl:flex-row"}
          id={"about"}
        >
          <div className={"pb-44 xl:w-1/2"}>
            <SectionHeading>About Utah Grown</SectionHeading>
            <ExplainerSection>
              Utah Grown serves as your primary resource for accessing medical
              cannabis cards in Utah. Our mission is to simplify the process for
              patients, offering a stress-free and cost-effective method to
              obtain their first-time card or renewals. In 2023, Utah Grown has
              proudly assisted over 2,200 patients in securing their medical
              cards and renewing existing ones.
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
      </main>
      <Footer />
    </body>
  );
}
