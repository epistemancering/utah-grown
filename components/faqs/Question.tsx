export default function Question(props: {
  question: string;
  openState: [string, Function];
  children: React.ReactNode;
}) {
  const onClick = function () {
    if (props.openState[0] === props.question) {
      props.openState[1]();
    } else {
      props.openState[1](props.question);
    }
  };

  return (
    <li className={"cursor-pointer list-none"} onClick={onClick}>
      <button
        className={
          "cursor-pointer border-0 bg-[transparent] text-start font-['Proxima_Nova_Semibold'] text-3xl text-greenthree xl:text-4xl"
        }
      >
        {props.question}
      </button>
      <div
        className={`${props.openState[0] === props.question ? "max-h-96 opacity-100" : "max-h-0 opacity-0"} overflow-hidden duration-1000`}
      >
        <div
          className={`flex flex-col gap-1 px-4 pt-4 text-greentwo xl:text-lg`}
        >
          {props.children}
        </div>
      </div>
    </li>
  );
}
