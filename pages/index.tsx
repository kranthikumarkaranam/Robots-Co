import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";
import {
  riseWithFade,
  staggerChildren,
  videoAnimation,
  wordAnimation,
} from "../utils/animations";

const Home: NextPage = () => {
  return (
    <motion.div
      className="min-h-screen px-12 bg-cream"
      initial="initial"
      animate="animate"
    >
      <Head>
        <title>Home | Robots Co</title>
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      </Head>
      <Navbar />
      <main className="grid grid-cols-[3fr_1fr] py-12">
        <h1 className="text-8xl font-bold w-[40rem] leading-[90%] tracking-[-2px]">
          <AnimatedWords title="Helper robots for a better everyday" />
        </h1>
        <motion.div
          className="text-base leading-[150%] self-end"
          variants={riseWithFade}
        >
          Born from the moonshot factory, we're building a new type of robot.
          One that can learn by itself, to help anyone with almost anything.
        </motion.div>
      </main>
      <motion.video
        className="w-full py-12"
        loop
        autoPlay
        muted
        playsInline
        variants={videoAnimation}
      >
        <source src="/assets/hero-video.mp4" type="video/mp4" />
      </motion.video>
      <footer className="flex justify-center text-sm text-zinc-400 py-12">
        <p>Copyright &copy; {(new Date().getFullYear()) > 2023 ? `2023 - ${new Date().getFullYear()}` : "2023"} Robot Co. All Rights Reserved.</p>
      </footer>
    </motion.div>
  );
};

type AnimatedWordsProps = {
  title: string;
};

const AnimatedWords: React.FC<AnimatedWordsProps> = ({ title }) => {
  return (
    <motion.span variants={staggerChildren}>
      {title.split(" ").map((word, idx) => (
        <div key={idx} className="inline-block overflow-hidden">
          <motion.span
            className="inline-block overflow-hidden"
            variants={wordAnimation}
          >
            {word + "\u00A0"}
          </motion.span>
        </div>
      ))}
    </motion.span>
  );
};

export default Home;
