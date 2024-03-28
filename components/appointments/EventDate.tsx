export default function EventDate(props: { date: string }) {
  const eventDate = new Date(props.date);

  return (
    <>
      {eventDate.toLocaleDateString(undefined, {
        timeZone: "UTC",
        weekday: "long",
        month: "long",
        day: "numeric",
      })}
      <span className={"align-text-top text-xs xl:text-2xl"}>
        {
          {
            one: "st",
            two: "nd",
            few: "rd",
            other: "th",
            zero: undefined,
            many: undefined,
          }[
            new Intl.PluralRules(undefined, { type: "ordinal" }).select(
              eventDate.getUTCDate(),
            )
          ]
        }
      </span>{" "}
      {eventDate.getUTCFullYear()}
    </>
  );
}
