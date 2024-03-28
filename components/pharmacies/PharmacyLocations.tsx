export default function PharmacyLocations(props: {
  locations: { address: string; tel: string }[];
}) {
  return props.locations.map(function (location) {
    return (
      <li
        key={location.address}
        className={"flex flex-col gap-x-9 xl:flex-row"}
      >
        <p className={"m-0 grow"}>{location.address}</p>
        <a
          className={"w-56 text-greytwo no-underline"}
          href={`tel:${location.tel.slice(0, 12)}`}
        >
          {location.tel}
        </a>
      </li>
    );
  });
}
