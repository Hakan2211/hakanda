import styles from "./about.module.css";
import Link from "next/link";
import ArrowLeft from "@/components/icons/arrow-left";

import dynamic from "next/dynamic";

import { format, parse, differenceInYears } from "date-fns";
import Timeline from "@/components/timeline/timeline";
import Footer from "@/components/footer/footer";
import QuickFacts from "@/components/quickfacts/quickfacts";

const ImageCanvas = dynamic(
  () => import("@/components/imageCanvas/imageCanvas"),
  {
    ssr: false,
  }
);

export const metadata = {
  title: `Hakanda • About Hakan Bilgic.`,
  description: "Hakan Bilgic's about page",
};

function About() {
  const date = parse("30 Dec 2017", "dd MMM yyyy", new Date());
  const formattedDate = format(date, "MMMM yyyy");
  const birthday = parse("22 Nov 1992", "dd MMM yyyy", new Date());
  const age = differenceInYears(new Date(), birthday);
  return (
    <main className="bg-[var(--bg-color)]">
      <div className="h-[150px]"></div>

      <div className={styles.wrapper}>
        <div className={styles.about_section}>
          <Link
            className="flex items-center w-fit text-sm gap-1 text-[var(--text-color-primary-900)] hover:text-yellow-600 transition-colors duration-300 ease-in-out  group"
            href={"/articles"}
          >
            <ArrowLeft className="w-4 h-4 transition-transform transform group-hover:-translate-x-1 hover:ease-in-out duration-500 " />
            <span className="">Articles</span>
          </Link>
          <div className="mt-10 mb-5">
            <div className="text-xl text-[var(--text-color-primary-800)] leading-relaxed tracking-wider">
              <span className="text-3xl bg-clip-text text-transparent  bg-gradient-to-r from-emerald-800 to-emerald-400 ">
                Bonjour, tout le monde!
              </span>{" "}
              <p className="mt-5">
                {" "}
                You reached the section where you can get to know more about
                myself and my journey.
              </p>
              <p className="text-base text-[var(--text-color-primary-600)] py-6 tracking-wider leading-relaxed">
                Some pictures of me below in case you are curious who is behind
                the articles. <br></br> I am {age} years old now and that is my
                story.
              </p>
            </div>
          </div>
          <div className="w-full h-[30rem] relative">
            <ImageCanvas />
          </div>
          <Timeline />
          <QuickFacts />
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default About;
