import Image from "next/image";
import SectionHeading from "@/components/SectionHeading";
import SectionSubheading from "@/components/SectionSubheading";
import ComboEvents from "@/components/appointments/ComboEvents";
import AppointmentTip from "@/components/appointments/AppointmentTip";
import TipTitle from "@/components/appointments/TipTitle";
import RegisterUtah from "@/components/appointments/UtahLink";

export default function Appointments() {
  return (
    <section id={"appointments"}>
      <SectionHeading className={"text-center"}>
        Upcoming Utah Medical Card Events
      </SectionHeading>
      <ul className={"mt-12 flex flex-col gap-12 p-0"}>
        <ComboEvents />
      </ul>
      <SectionSubheading className={"text-center"}>
        Things to know before your appointment
      </SectionSubheading>
      <ol
        className={
          "mt-16 flex flex-col gap-16 p-0 text-xl text-greenone xl:mt-20 xl:gap-20 xl:text-3xl"
        }
      >
        <AppointmentTip order={1}>
          <div>
            <TipTitle>
              You’re going to register with the state of Utah. You can start
              this before you arrive.
            </TipTitle>
            <div className={"flex flex-col items-center gap-5"}>
              <div className={"flex flex-col gap-5"}>
                <RegisterUtah name={"ID"} href={"https://idhelp.utah.gov"}>
                  Obtain access to your Utah Digital ID
                </RegisterUtah>
                <RegisterUtah
                  name={"EVS"}
                  href={
                    "https://medicalcannabis.utah.gov/resources/evs-access/"
                  }
                >
                  Fill out all the fields until you get to “Awaiting
                  Certification” status
                </RegisterUtah>
              </div>
              <Image
                height={142}
                width={339}
                src={"/AwaitingCert-Image@2x.png"}
                alt={"Awaiting Certification"}
              />
            </div>
          </div>
        </AppointmentTip>
        <AppointmentTip order={2}>
          <TipTitle>Check in with your QMP</TipTitle>
          <ol className={"my-6"}>
            <li>QMP Registration</li>
            <li>Medical Evaluation/Consultation</li>
            <li>Payment</li>
          </ol>
        </AppointmentTip>
        <AppointmentTip order={3}>
          <TipTitle>Renewal or New Patient?</TipTitle>
          <div>
            <p className={"my-6"}>
              If this is a renewal, congratulations you are ready to shop...
            </p>
            <p>
              If you are a new patient, here is some help to get you started...
            </p>
            <div className={"ml-24"}>
              <ol>
                <li>Meet with Pharmacist</li>
                <li>Set up your Portal Account</li>
                <li>Start Shopping</li>
              </ol>
              <p>**Don’t forget to take advantage of new patient deals**</p>
            </div>
          </div>
        </AppointmentTip>
      </ol>
    </section>
  );
}
