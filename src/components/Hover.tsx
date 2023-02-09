import { Dispatch, SetStateAction } from "react";

const Hover = ({
  text,
  setCursorVariant,
}: {
  text: string;
  setCursorVariant: Dispatch<SetStateAction<string>>;
}) => {
  function setDefault() {
    setCursorVariant("default");
  }
  function setActive() {
    setCursorVariant("active");
  }

  return (
    <div
      onMouseEnter={() => setActive()}
      onMouseLeave={() => setDefault()}
      className="z-1 static flex h-full w-max items-center justify-center rounded-xl border-2 border-solid p-32 dark:bg-primary_white"
    >
      <p>{text}</p>
    </div>
  );
};

export default Hover;
