import TanButton from "@/components/TanButton";
import EventDate from "@/components/appointments/EventDate";
import EventTime from "@/components/appointments/EventTime";

export default function ComboEvent(props: {
  event: {
    location: string;
    date: string;
    start: string;
    end: string;
    title: string;
  };
}) {
  return (
    <li
      className={
        "flex flex-col items-center gap-x-7 rounded-2xl border-2 border-solid bg-greythree p-7 text-xl text-greenthree xl:flex-row xl:text-4xl"
      }
    >
      <h3 className={"m-0 text-center font-normal xl:w-96"}>
        {props.event.location}
      </h3>
      <div className={"grow"}>
        <p
          className={
            "m-1.5 font-['Proxima_Nova_Extrabold'] text-2xl text-greentwo xl:text-5xl"
          }
        >
          <EventDate date={props.event.date} />
        </p>
        <p className={"m-1.5"}>
          <EventTime time={props.event.start} /> -{" "}
          <EventTime time={props.event.end} />
        </p>
        <p className={"m-1.5"}>{props.event.title}</p>
      </div>
      <TanButton
        label={"Book Time"}
        className={
          "rounded-full py-5 font-['Proxima_Nova_Regular'] text-2xl xl:text-4xl"
        }
        link={""}
      />
    </li>
  );
}
