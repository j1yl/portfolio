import type { Dispatch, SetStateAction } from "react";

const Hover = ({
  text,
  selectVariant,
  setCursorVariant,
}: {
  text: string;
  selectVariant: string;
  setCursorVariant: Dispatch<SetStateAction<string>>;
}) => {
  return (
    <div
      onMouseEnter={() => setCursorVariant(selectVariant)}
      onMouseLeave={() => setCursorVariant("default")}
      className="z-1 static flex h-full w-2/3 items-center justify-center rounded-xl border-2 border-solid border-primary_dark p-8 dark:border-primary_white dark:text-primary_white"
    >
      <p>{text}</p>
    </div>
  );
};

export default Hover;
