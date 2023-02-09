import { useEffect, useState } from "react";

interface QOTD {
  data: {
    author?: string;
    quote?: string;
  };
}

const QOTD = () => {
  const [data, setData] = useState({
    author: "",
    quote: "",
  });

  useEffect(() => {
    fetch("https://api.goprogram.ai/inspiration")
      .then((res) => res.json())
      .then((data) => setData(data));
    setTimeout(() => {}, 5000);
  });

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <p className="font-semibold">{data.quote}</p>
      <h3 className="w-full text-right text-sm font-bold underline">
        {data.author}
      </h3>
    </div>
  );
};

export default QOTD;
