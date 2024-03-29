/* eslint-disable react/no-unescaped-entities */
import { AnimatedText } from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import profilePic from "../../public/images/profile.webp";
import { LinkArrow } from "@/components/icons";
import TransitionEffect from "@/components/TransitionEffect";
import DynamicHead from "@/components/DynamicHead";
import HireMe from "@/components/HireMe";
import { getHero } from "@/sanity-client/sanityClient";

export default function Home({ hero }: any) {
  const { title, hero_text } = hero[0];
  return (
    <Fragment>
      <DynamicHead
        title="Huy Bui's Portfolio"
        content="Welcome to Huy Bui's Portfolio! Explore a showcase of web app projects and software engineering articles crafted by a talented React and Node.js developer. Join Huy's journey of innovation and excellence in the world of web development. Discover inspiring projects and gain insights into cutting-edge technologies for your own software endeavors."
      />

      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light sm:items-start">
        <Layout className="pt-0 md:pt-16 sm:pt-16">
          <div className="flex items-center gap-6 justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePic}
                alt="Profile"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center xl:text-left">
              <AnimatedText
                text={title}
                className="!text-6xl !text-left 
                xl:!text-5xl lg:!text-center lg:!text=6xl md:!text-5xl sm:!text-3xl
                "
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                {hero_text}
              </p>
              <div className="w-full flex flex-col lg:items-center">
                <div className="flex items-center self-start mt-2 lg:self-center">
                  <Link
                    href="/cv.pdf"
                    target={"_blank"}
                    className="flex items-center bg-dark text-light p-2.5 px-6
                  rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                  border-2 border-solid border-transparent hover:border-dark
                  
                  dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                  hover:dark:border-light md:p-2 md:px-4 md:text-base
                  "
                    download={true}
                  >
                    Resume <LinkArrow className={"w-6 ml-1"} />
                  </Link>
                  <Link
                    href={`mailto:${process.env.NEXT_PUBLIC_PERSONAL_EMAIL}`}
                    target={"_blank"}
                    className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                  >
                    Contact
                  </Link>
                </div>
                <Link
                  href={`/about`}
                  className="flex items-center bg-dark text-light p-2.5 px-6 mt-2 w-fit flex-start
                rounded-lg text-lg font-semibold hover:bg-light hover:text-dark
                border-2 border-solid border-transparent hover:border-dark sm:px-[1.75rem] md:px-[1.75rem] lg:px-[2rem]
                
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light md:p-2 md:px-4 md:text-base xl-hidden"
                >
                  Check my bio here
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
      </main>
    </Fragment>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get skills
  const hero = await getHero();
  return {
    props: {
      hero,
    },
  };
}
