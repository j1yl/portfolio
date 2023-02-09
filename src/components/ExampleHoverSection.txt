import { Dispatch, SetStateAction } from "react";

const HoverSection = ({
  setCursorVariant,
  variantId,
  text,
  color,
}: {
  setCursorVariant: Dispatch<SetStateAction<string>>;
  variantId: number;
  text: string;
  color: string;
}) => {
  return (
    <div
      style={{ borderColor: `${color}` }}
      onMouseEnter={() => {
        setCursorVariant(variantId.toString());
      }}
      onMouseLeave={() => {
        setCursorVariant("default");
      }}
      className="z-1 static flex h-full w-full items-center justify-center rounded-xl border-2 border-solid"
    >
      <p className="mx-auto w-max">{text}</p>
    </div>
  );
};

export default HoverSection;
