export default function ExplainerSection(props: { children: React.ReactNode }) {
  return (
    <p className={"m-0 text-2xl leading-loose xl:text-3xl xl:leading-loose"}>
      {props.children}
    </p>
  );
}
