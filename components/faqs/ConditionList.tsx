export default function ConditionList(props: { children: React.ReactNode }) {
  return <ul className={"list-inside list-disc p-0"}>{props.children}</ul>;
}
