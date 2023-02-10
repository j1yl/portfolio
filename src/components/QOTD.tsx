import React, { useEffect, useState } from "react";

interface Quote {
  quote: string;
  author: string;
}

const QOTD = () => {
  const [state, setState] = useState<Quote>({
    quote: "",
    author: "",
  });

  const loadData = () => {
    fetch("https://api.goprogram.ai/inspiration")
      .then((res) => res.json())
      .then((json: Quote) => setState(json))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div className="flex flex-col justify-between p-8">
      <p>{state?.quote}</p>
      <h2 className="w-full text-right font-bold">{state?.author}</h2>
    </div>
  );
};

export default QOTD;
