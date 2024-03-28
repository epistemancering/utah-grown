export default function SectionHeading(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`my-4 ${props.className} text-5xl text-greenone xl:text-7xl`}
    >
      {props.children}
    </h2>
  );
}
