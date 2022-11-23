import { PageWrapper } from "../components/PageWrapper";
import FloatingChar from "../components/FloatingChar";
import FloatingWord from "../components/FloatingWord";
import Button from "../components/Button";

export default function Home() {
  return (
    <>
      <PageWrapper className="overflow-hidden">
        <main className="mx-auto h-[84vh] max-w-6xl flex flex-col justify-center px-2 md:px-8 text-light">
          <section className="flex flex-col gap-5">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-[5rem] font-bold text-second">
                <FloatingChar text={"JOE LEE"} delay={0} />
              </h1>
              <h2 className="text-5xl md:text-[5rem] font-bold text-second">
                <FloatingChar text={"WEB DEVELOPER"} delay={0.2} />
              </h2>
            </div>
            <div className="md:w-2/3 w-full text-base">
              <FloatingWord
                text={
                  "I design and develop websites from scratch using the latest technology. I am currently pursuing an undergraduate degree in Computer Science at California State University, Fullerton."
                }
                delay={0.3}
              />
            </div>
            <Button
              styles={
                "w-max h-max text-3xl md:text-[3rem] border-2 border-light rounded-lg px-8 py-3 md:px-16 md:py-6"
              }
              delay={1}
              text={"CONTACT ME"}
            />
          </section>
          <section className="mt-16 flex flex-col gap-5">
            <h2 className="text-3xl md:text-[2rem] font-bold text-second">
              <FloatingChar text={"FINDING BEAUTY IN SIMPLICITY"} delay={0.5} />
            </h2>
            <div className="md:w-2/3 w-full text-base">
              <FloatingWord
                text={
                  "I am committed to crafting the best web experiences. I optimize loading times, follow SEO best practices, and develop with precision on every project."
                }
                delay={0.6}
              />
            </div>
          </section>
        </main>
      </PageWrapper>
    </>
  );
}
1;
