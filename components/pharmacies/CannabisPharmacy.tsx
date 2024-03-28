import PharmacyLocations from "@/components/pharmacies/PharmacyLocations";

export default function CannabisPharmacy(props: {
  name: string;
  locations: { address: string; tel: string }[];
  site: string;
  children?: React.ReactNode;
}) {
  return (
    <li>
      <p className={"m-0 text-4xl text-greenthree"}>{props.name}</p>
      <div className={"flex flex-col gap-9 text-xl xl:flex-row xl:text-2xl"}>
        <ul className={"flex grow flex-col gap-y-2 p-0"}>
          <PharmacyLocations locations={props.locations} />
        </ul>
        <a
          className={"w-80 text-greytwo no-underline"}
          href={`https://${props.site}`}
          target={"_blank"}
        >
          {props.site}
        </a>
      </div>
      {props.children}
    </li>
  );
}
