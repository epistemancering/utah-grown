import ComboEvent from "@/components/appointments/ComboEvent";

const placeholderEvents = [
  {
    location: "Downtown SLC",
    date: "2023-10-03",
    start: "09:00",
    end: "14:00",
    title: "New Patients and Renewals",
  },
  {
    location: "Price UT",
    date: "2023-10-19",
    start: "09:00",
    end: "16:00",
    title: "Renewals Only",
  },
  {
    location: "<Other Location>",
    date: "2023-11-10",
    start: "10:00",
    end: "14:00",
    title: "Special Event for Veterans",
  },
];

export default async function ComboEvents() {
  return (await placeholderEvents).map(function (event, index) {
    return <ComboEvent key={index} event={event} />;
  });
}
