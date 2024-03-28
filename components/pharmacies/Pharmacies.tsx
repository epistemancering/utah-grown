import TanButton from "@/components/TanButton";
import SectionHeading from "@/components/SectionHeading";
import CannabisPharmacy from "@/components/pharmacies/CannabisPharmacy";

export default function Pharmacies() {
  return (
    <section className={"flex w-full flex-col items-start"} id={"pharmacies"}>
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
  );
}
