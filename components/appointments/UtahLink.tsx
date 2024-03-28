import TanButton from "@/components/TanButton";

export default function UtahLink(props: {
  name: string;
  href: string;
  children: React.ReactNode;
}) {
  return (
    <div className={"flex flex-col items-center gap-x-10 xl:flex-row"}>
      <TanButton
        label={`${props.name}.Utah.gov`}
        className={
          "rounded-full py-4 font-['Proxima_Nova_Semibold'] text-xl xl:text-2xl"
        }
        link={props.href}
        external={true}
      />
      <p className={"m-0"}>{props.children}</p>
    </div>
  );
}
