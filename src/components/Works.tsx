const work = [
  {
    name: "Heavensent",
    imgUrl:
      "https://images.wallpaperscraft.com/image/single/astronaut_ring_neon_156673_1920x1080.jpg",
    desc: "Heavensent is a product showcase website put together using the latest technology.",
    stack: [
      "TYPESCRIPT",
      "REACT",
      "TAILWINDCSS",
      "VITE",
      "REACT-THREE/FIBER",
      "REACT-THREE/DREI",
    ],
    gitUrl: "https://github.com/j1yl/product",
    deployUrl: "https://github.com/j1yl/product",
  },
  {
    name: "Portfolio",
    imgUrl:
      "https://images.wallpaperscraft.com/image/single/astronaut_ring_neon_156673_1920x1080.jpg",
    desc: "Portfolio is a web application made to showcase my works, contact information, and information to future employers.",
    stack: ["TYPESCRIPT", "REACT", "TAILWINDCSS", "VITE", "FRAMER"],
    gitUrl: "https://github.com/j1yl/portfolio",
    deployUrl: "https://github.com/j1yl/portfolio",
  },
  {
    name: "Spotlyzer",
    imgUrl:
      "https://images.wallpaperscraft.com/image/single/astronaut_ring_neon_156673_1920x1080.jpg",
    desc: "Spotify is a web application that displays the user's top tracks and artists. Due to Spotify API&apos; limits, the program will not be publicly available, but a demo will be provided on GitHub.",
    stack: ["JAVASCRIPT", "REACT", "NEXT", "SASS", "SPOTIFYAPI", "NEXTAUTH"],
    gitUrl: "https://github.com/j1yl/spotlyzer",
    deployUrl: "https://spotlyzer.vercel.app",
    key: "1",
  },
];

const Works = () => {
  return (
    <>
      <section className="max-w-6xl mx-auto">
        {work.map((item: any) => (
          <Card {...item} />
        ))}
      </section>
    </>
  );
};

const Card = ({
  name,
  imgUrl,
  desc,
  stack,
  gitUrl,
  deployUrl,
}: {
  name: string;
  imgUrl: string;
  desc: string;
  stack: [string];
  gitUrl: string;
  deployUrl: string;
}) => {
  return (
    <>
      <div className="flex flex-col md:flex-row m-3 md:m-0 md:mb-3 bg-zinc-900 rounded-xl">
        <img
          src={imgUrl}
          className="w-full md:w-1/2 rounded-t-xl md:rounded-l-xl"
        />
        <div className="px-2 py-2">
          <h2 className="text-3xl text-zinc-100 font-bold">{name}</h2>
          <p className="text-base text-zinc-100 font-regular mt-3">{desc}</p>
          <div className="flex flex-col mt-3 text-base text-zinc-100 font-regular">
            {stack.map((item) => (
              <span key={item} className="w-full">
                #{item}
              </span>
            ))}
          </div>
          <div className="flex gap-2 mt-3">
            <a
              href={gitUrl}
              className="py-1 px-3 bg-zinc-100 text-zinc-900 rounded-full mb-3"
            >
              GITHUB
            </a>
            <a
              href={deployUrl}
              className="py-1 px-3 bg-zinc-100 text-zinc-900 rounded-full mb-3"
            >
              VISIT
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
