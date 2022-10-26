const projects: any = [
  {
    name: "Spotlyzer",
    description:
      "A web application that fetches from the SpotifyAPI using NEXTAUTH. Due to Spotify's API restrictions, this application will not be publicly accessible, a demo can be found on GitHub.",
    techstack: ["JAVASCRIPT", "SASS", "REACT", "NEXT", "SPOTIFYAPI"],
    github: "https://github.com/j1yl/spotlyzer",
    url: "https://spotlyzer.vercel.app",
    img: "https://i.imgur.com/v91zbT3.png",
  },
];

const Works = () => {
  return (
    <>
      <div className="max-w-6xl bg-slate-100 mx-auto h-screen w-6xl">
        <div className="grid grid-cols-2 grid-rows-2 place-items-center h-11/12 w-full px-4 md:px-0 py-16">
          {projects.map((x: any) => (
            <Card {...x} key={x} />
          ))}
        </div>
      </div>
    </>
  );
};

const Card = ({
  name,
  description,
  techstack,
  github,
  url,
  img,
}: {
  name: string;
  description: string;
  techstack: [string];
  github: string;
  url: string;
  img: string;
}) => {
  return (
    <>
      {/* <div className="bg-zinc-900 flex w-full">
        <img className="w-full" src="/spotlyzer.jpg" />
        <div className="">
          <div className="px-6 py-4">
            <p className="font-bold text-xl mb-2 text-zinc-100">{name}</p>
            <div className="mt-3 mb-3">
              {techstack.map((item) => (
                <span className="inline-block text-sm font-regular text-zinc-100 mr-2 mb-2">
                  #{item}
                </span>
              ))}
            </div>
            <p className="text-zinc-100 text-sm">{description}</p>
          </div>
          <div className="px-6 pb-2">
            <span className="inline-block bg-zinc-100 rounded-full px-3 py-1 text-sm font-regular text-zinc-900 mr-2 mb-2">
              <a href={url}>&lt; Visit &gt;</a>
            </span>
            <span className="inline-block bg-zinc-100 rounded-full px-3 py-1 text-sm font-regular text-zinc-900 mr-2 mb-2">
              <a href={github}>&lt; Code &gt;</a>
            </span>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Works;
