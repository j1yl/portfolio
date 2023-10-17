import Link from "next/link";

import { interests, navlinks, projects, socials } from "@/config";

import Books from "@/components/Books";
import CookieBanner from "@/components/CookieBanner";
import Experience from "@/components/Experience";
import LatestLeeLetter from "@/components/LatestLeeLetter";
import MOTD from "@/components/MOTD";
import Songs from "@/components/Songs";
import Wishlist from "@/components/Wishlist";

export default function Home() {
  return (
    <>
      <main className="min-h-screen w-full px-4 flex items-center justify-center">
        <div className="md:max-w-6xl md:mx-auto gap-4 my-16 relative grid md:grid-cols-4 grid-cols-1 w-full">
          <nav
            id="navbar"
            className="p-4 w-full rounded-xl h-max flex flex-col gap-8 bg-neutral-50 dark:bg-neutral-900 md:sticky md:top-16"
          >
            <h1>
              <strong>Joe L. Lee</strong> is a designer, developer, and business
              owner who engineers digital experience & interaction.
            </h1>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Sitemap</h2>
              <ul>
                {navlinks.map((_, i) => (
                  <li key={i}>
                    <Link
                      href={_.slug}
                      className="underline hover:no-underline"
                    >
                      {_.name} {"->"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">Interests</h2>
              <ul>
                {interests.map((_, i) => (
                  <li key={i}>{_}</li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-bold">More of me</h2>
              <ul>
                {socials.map((_, i) => (
                  <li key={i}>
                    <Link
                      target="_blank"
                      referrerPolicy="no-referrer"
                      href={_.link}
                      className="underline hover:no-underline"
                    >
                      {_.platform} {"->"}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <section className="w-full md:col-span-3 flex gap-4 flex-col">
            <CookieBanner />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="grid md:grid-cols-1 w-full h-max gap-4">
                <h2 className="sr-only">projects</h2>
                <div className="rounded-xl w-full bg-neutral-50 dark:bg-neutral-900 p-4 aspect-square">
                  <h3>webverry</h3>
                </div>
                {projects.map((_, i) => (
                  <div
                    key={i}
                    className="rounded-xl w-full bg-neutral-50 dark:bg-neutral-900 p-4 aspect-square"
                  >
                    {_.name}
                  </div>
                ))}
              </div>
              <div className="md:col-span-2 grid grid-cols-1 gap-4">
                <Experience />
                <Songs />
                <MOTD />
                <Wishlist />
                <Books />
                <LatestLeeLetter />
              </div>
            </div>
          </section>
          <footer
            id="footer"
            className="rounded-xl w-full md:text-right text-center py-4 md:col-start-2 md:col-span-3"
          >
            © {new Date().getFullYear()} Joe L. Lee. All rights reserved.
          </footer>
        </div>
      </main>
    </>
  );
}
