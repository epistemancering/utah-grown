export default function AnchorLink(props: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      className={
        "text-lg text-greentwo no-underline hover:underline xl:text-2xl"
      }
      href={props.href}
    >
      {props.children}
    </a>
  );
}
