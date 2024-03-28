export default function EventTime(props: { time: string }) {
  return new Date(`2023-10-03T${props.time}Z`)
    .toLocaleTimeString(undefined, {
      timeZone: "UTC",
      hour: "numeric",
      minute: "numeric",
    })
    .toLowerCase();
}
