export default function SectionSubheading(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h3
      className={`mb-5 mt-24 ${props.className} text-4xl text-greenone xl:text-6xl`}
    >
      {props.children}
    </h3>
  );
}
