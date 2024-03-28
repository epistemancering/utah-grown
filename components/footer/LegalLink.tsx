export default function LegalLink(props: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a className={"text-greythree no-underline"} href={props.href}>
      {props.children}
    </a>
  );
}
