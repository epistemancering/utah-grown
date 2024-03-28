export default function AppointmentTip(props: {
  order: number;
  children: React.ReactNode;
}) {
  return (
    <li
      className={
        "flex flex-col items-center gap-x-12 xl:flex-row xl:items-stretch"
      }
    >
      <div
        className={
          "flex h-24 min-w-24 items-center justify-center rounded-full bg-greentwo text-6xl text-greythree"
        }
      >
        {props.order}.
      </div>
      {props.children}
    </li>
  );
}
