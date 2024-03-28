export default function TanButton(props: {
  label: string;
  className?: string;
  link?: string;
  external?: boolean;
}) {
  return (
    <a href={props.link} target={props.external ? "_blank" : undefined}>
      <button
        className={`${props.className} w-72 cursor-pointer border-0 bg-tantwo text-greentwo hover:bg-greenfour hover:text-greenone`}
      >
        {props.label}
      </button>
    </a>
  );
}
