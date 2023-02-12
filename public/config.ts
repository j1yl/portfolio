export const languages = ["TypeScript", "Python", "C++", "HTML", "CSS"];

export const frameworks = [
  "React",
  "NextJS",
  "SvelteKit",
  "Supabase",
  "Prisma",
  "Node",
  "Express",
  "MongoDB",
];

export const projects = [
  {
    id: "1",
    title: "SaveArt",
    description:
      "A social media platform integrating OpenAI's DALL-E model using Sveltekit, Supabase, and Prisma. Users can post a generated image from an inputted string, delete existing posts, and like public posts.",
    previewLink: "https://saveart.vercel.app",
    githubLink: "https://github.com/j1yl/saveart",
    techstack: ["Sveltekit", "Prisma", "Supabase", "TailwindCSS"],
    status: "wip",
    images: [
      "https://i.imgur.com/ef5tqmT.jpg",
      "https://i.imgur.com/9cB2tuI.png",
      "https://i.imgur.com/8lc6Drc.jpeg",
      "https://i.imgur.com/5gFkNjh.png",
    ],
  },
  {
    id: "2",
    title: "ShrinkURL",
    description:
      "A website built using ReactJS and NextJS that integrates a public link shortening API to provide a link shrinking service.",
    previewLink: "https://shrinkurl.vercel.app",
    githubLink: "https://github.com/j1yl/shrinkurl",
    techstack: ["TypeScript", "React", "TailwindCSS", "GotinyAPI"],
    status: "finished",
    images: [
      "https://camo.githubusercontent.com/0761ba0794b21d0902635bf2e6b03591272d77b4d556633e927c3e15205525a5/68747470733a2f2f692e696d6775722e636f6d2f746438624862792e676966",
    ],
  },
  {
    id: "3",
    title: "Spotlyzer",
    description:
      "A website built using ReactJS and NextJS that integrates Spotify’s API and OAuth to access user data like monthly top artists and songs. This data is parsed then displayed in an orderly fashion",
    previewLink: "",
    githubLink: "https://github.com/j1yl/spotlyzer",
    techstack: ["JavaScript", "SASS", "React", "NextJS", "SpotifyAPI"],
    status: "finished",
    images: [
      "https://camo.githubusercontent.com/9331c62c6287ce9d39b843c0925a2012ffc9d4428924e4cd9efd71c69f43c11c/68747470733a2f2f692e696d6775722e636f6d2f4331726b4a7a422e706e67",
      "https://camo.githubusercontent.com/31b8de98ada1d02a2f0ea88e2b3320a39e16b26f93c30fb8305dfae4fc1d04d2/68747470733a2f2f692e696d6775722e636f6d2f6b54487251394a2e706e67",
    ],
  },
  {
    id: "4",
    title: "EasyCommerce",
    description: "Working on it right now...",
    previewLink: "",
    githubLink: "https://github.com/j1yl/easycommerce",
    techstack: ["TypeScript", "NextJS", "React", "Sanity", "Stripe"],
    status: "wip",
    images: ["https://i.imgur.com/lrK2n2y.png"],
  },
  {
    id: "5",
    title: "Cmail",
    description:
      "A python script that can send customizable emails using data from a csv. This was achieved using Pandas to analyze the csv and Yagmail to send the emails.",
    previewLink: "",
    githubLink: "https://github.com/j1yl/cmail",
    techstack: ["Python", "Yagmail", "Pandas"],
    status: "finished",
    images: ["https://i.imgur.com/lrK2n2y.png"],
  },
  {
    id: "6",
    title: "Portfolio",
    description:
      "A website serving as my resume built using ReactJS, NextJS, and Framer Motion.",
    previewLink: "https://lefo.dev",
    githubLink: "https://github.com/j1yl/lefo",
    techstack: [
      "TypeScript",
      "NextJS",
      "React",
      "TailwindCSS",
      "Framer Motion",
      "EmailJS",
    ],
    status: "finished",
    images: ["https://i.imgur.com/x6WScOW.png"],
  },
];

export const resume =
  "https://drive.google.com/file/d/1RBkBknA8NbNgASBV-vzaZ5FBX-cPk4-D/view?usp=share_link";
